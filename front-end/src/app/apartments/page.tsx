"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import styles from "./page.module.css";
import { ApartmentCard } from "../components/ApartmentCard";
import { Apartment } from "../types";

export default function Home() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchApartments = async (search?: string) => {
    setIsLoading(true);
    try {
      const url = search
        ? `http://localhost:3000/api/apartments?search=${search}`
        : "http://localhost:3000/api/apartments";
      const response = await fetch(url);
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchApartments(searchQuery);
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>NAWY</div>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search apartments..."
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <Search />
              </button>
            </div>
          </form>
        </div>
      </nav>

      {/* apartments list */}
      <main className={styles.main}>
        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.grid}>
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
