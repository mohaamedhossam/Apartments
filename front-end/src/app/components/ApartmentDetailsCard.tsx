import { Apartment } from "../types";
import styles from "../apartments/[id]/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, MapPin, Currency, Check, X } from "lucide-react";

export const ApartmentDetailsCard = ({ apartment }: { apartment: Apartment }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        <ArrowLeft size={20} />
        Back to Listings
      </button>

      <div className={styles.content}>
        <div className={styles.flexContainer}>
          {/* Left side - Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/01a8e8118133239.6109d0c9d267f.jpg"
                alt={apartment.name}
                width={400}
                height={300}
                className={styles.mainImage}
              />
            </div>
          </div>

          {/* Right side - Details */}
          <div className={styles.detailsSection}>
            <div className={styles.header}>
              <h1 className={styles.title}>{apartment.name}</h1>
              <div className={styles.statusBadge} data-available={apartment.available}>
                {apartment.available ? (
                  <>
                    <Check size={16} /> Available
                  </>
                ) : (
                  <>
                    <X size={16} /> Not Available
                  </>
                )}
              </div>
            </div>

            <div className={styles.keyDetails}>
              <div className={styles.detailItem}>
                <Home size={20} />
                <span>Unit: {apartment.unitNumber}</span>
              </div>
              <div className={styles.detailItem}>
                <MapPin size={20} />
                <span>{apartment.location}</span>
              </div>
              <div className={styles.detailItem}>
                <Currency size={20} />
                <span>${apartment.price.toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.projectInfo}>
              <h2>Project</h2>
              <p>{apartment.project}</p>
            </div>

            <div className={styles.description}>
              <h2>Description</h2>
              <p>{apartment.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
