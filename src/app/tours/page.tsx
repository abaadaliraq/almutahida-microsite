import Link from "next/link";
import { OptionalImage } from "@/components/ui/OptionalImage";
import { tours } from "@/data/tours";
import styles from "@/components/factory/FactoryLayout.module.css";

export const metadata = {
  title: "All Virtual Tours | Almutahida",
};

export default function ToursIndexPage() {
  const enabledTours = tours.filter((tour) => tour.enabled).sort((a, b) => a.order - b.order);

  return (
    <main className={styles.pageShell}>
      <div className={styles.frame}>
        <section className={styles.intro}>
          <p className={styles.introNumber}>01</p>
          <div>
            <h1 className={styles.title}>ALL VIRTUAL TOURS</h1>
            <p className={styles.titleAr} dir="rtl">
              جميع الجولات الافتراضية
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.listingGrid}>
            {enabledTours.map((tour) => (
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
      </div>
    </main>
  );
}
