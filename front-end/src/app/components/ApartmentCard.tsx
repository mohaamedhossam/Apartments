import Image from "next/image";
import styles from "../apartments/page.module.css";
import { Apartment } from "../types";
import Link from "next/link";

export const ApartmentCard = ({ apartment }: { apartment: Apartment }) => (
  <Link href={`/apartments/${apartment.id}`}>
    <div className={styles.card}>
      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/01a8e8118133239.6109d0c9d267f.jpg"
        alt={apartment.name}
        className={styles.cardImage}
        width={100}
        height={100}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{apartment.name}</h3>
        <p className={styles.cardLocation}>{apartment.location}</p>
        <p className={styles.cardPrice}>${apartment.price.toLocaleString()}</p>
      </div>
    </div>
  </Link>
);
