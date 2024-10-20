"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { ApartmentDetailsCard } from "@/app/components/ApartmentDetailsCard";
import { Apartment } from "@/app/types";

export default function ApartmentDetails() {
  const params = useParams();
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApartmentDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/apartments/${params.id}`);
      if (!response.ok) throw new Error("Failed to fetch apartment details");
      const data = await response.json();
      setApartment(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApartmentDetails();
  }, [params.id]);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : !apartment ? (
        <div className={styles.error}>Apartment not found</div>
      ) : (
        <ApartmentDetailsCard apartment={apartment} />
      )}
    </div>
  );
}
