import { FactoryDeck } from "./FactoryDeck";
import styles from "./ToursSection.module.css";

export function ToursSection() {
  return (
    <section className={styles.section} id="tours" aria-labelledby="tours-title">
      <div className={styles.headingBlock}>
        <p className={styles.kicker}>VIRTUAL FACTORY EXPERIENCE</p>
        <h2 id="tours-title" className={styles.heading}>
          Explore the Factory
        </h2>
        <p className={styles.headingAr} dir="rtl">
          استكشف المصانع
        </p>
      </div>
      <FactoryDeck />
    </section>
  );
}
