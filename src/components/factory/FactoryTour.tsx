import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

type FactoryTourProps = {
  tour: Tour;
};

export function FactoryTour({ tour }: FactoryTourProps) {
  return (
    <section className={styles.tourSection} aria-label={`${tour.titleEn} virtual tour`}>
      <div className={styles.tourFrame}>
        <iframe
          src={tour.matterportUrl}
          title={`${tour.titleEn} virtual tour`}
          allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
        />
        <div className={styles.tourIdentity}>
          <span>{String(tour.order).padStart(2, "0")}</span>
          <strong>{tour.titleEn.toUpperCase()}</strong>
          <span dir="rtl">{tour.titleAr}</span>
        </div>
      </div>
    </section>
  );
}
