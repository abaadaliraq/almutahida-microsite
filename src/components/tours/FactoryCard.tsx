import { OptionalImage } from "@/components/ui/OptionalImage";
import type { Tour } from "@/types/tour";
import styles from "./FactoryDeck.module.css";

type FactoryCardProps = {
  tour: Tour;
  position: number;
  isActive: boolean;
  totalTours: number;
  onClick: () => void;
};

function formatTourNumber(order: number) {
  return String(order).padStart(2, "0");
}

function positionClass(position: number) {
  if (position === 0) return styles.positionActive;
  if (position === -1) return styles.positionLeft;
  if (position === 1) return styles.positionRight;
  if (position < -1) return styles.positionFarLeft;
  return styles.positionFarRight;
}

export function FactoryCard({ tour, position, isActive, totalTours, onClick }: FactoryCardProps) {
  return (
    <button
      className={`${styles.card} ${positionClass(position)}`}
      type="button"
      onClick={onClick}
      aria-label={isActive ? `Open ${tour.titleEn} profile` : `Select ${tour.titleEn}`}
      aria-current={isActive ? "true" : undefined}
    >
      <OptionalImage
        src={tour.coverImage}
        alt={`${tour.titleEn} cover`}
        className={styles.cardImage}
        placeholderLabel={`${tour.titleEn} cover pending`}
      />
      <span className={styles.cardShade} aria-hidden="true" />
      <span className={styles.cardEdge} aria-hidden="true" />
      <span className={styles.cardContent}>
        <span className={styles.cardNumber}>
          {formatTourNumber(tour.order)}
          {isActive ? ` / ${String(totalTours).padStart(2, "0")}` : ""}
        </span>
        <span>
          <span className={styles.cardTitle}>{tour.titleEn.toUpperCase()}</span>
          <span className={styles.cardTitleAr} dir="rtl">
            {tour.titleAr}
          </span>
        </span>
        {isActive ? (
          <span className={styles.exploreCue}>
            <span>EXPLORE →</span>
            <span dir="rtl">استكشف</span>
          </span>
        ) : null}
      </span>
    </button>
  );
}
