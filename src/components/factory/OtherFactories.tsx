import Link from "next/link";
import { OptionalImage } from "@/components/ui/OptionalImage";
import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

export function OtherFactories({ currentSlug, tours }: { currentSlug: string; tours: Tour[] }) {
  const otherTours = tours.filter((tour) => tour.slug !== currentSlug && tour.enabled);

  return (
    <section className={styles.section} aria-labelledby="other-factories">
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}>Other Factories</p>
          <h2 id="other-factories" className={styles.heading}>
            OTHER FACTORIES
          </h2>
          <p className={styles.headingAr} dir="rtl">
            مصانع أخرى
          </p>
        </div>
      </div>
      <div className={styles.otherGrid}>
        {otherTours.map((tour) => (
          <Link className={styles.otherCard} href={`/tours/${tour.slug}`} key={tour.id}>
            <OptionalImage
              src={tour.coverImage}
              alt={`${tour.titleEn} cover`}
              className={styles.otherImage}
              placeholderLabel={`${tour.titleEn} cover pending`}
            />
            <span className={styles.otherBody}>
              <span className={styles.otherNumber}>{String(tour.order).padStart(2, "0")}</span>
              <span className={styles.otherTitle}>{tour.titleEn.toUpperCase()}</span>
              <span className={styles.otherTitleAr} dir="rtl">
                {tour.titleAr}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
