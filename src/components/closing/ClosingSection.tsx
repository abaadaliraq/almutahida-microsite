import { BrandMark } from "@/components/brand/BrandMark";
import styles from "./ClosingSection.module.css";

export function ClosingSection() {
  return (
    <section className={styles.section} aria-label="Almutahida closing">
      <BrandMark className={styles.logo} />
      <p className={styles.brand}>ALMUTAHIDA PACKAGING</p>
      <h2 className={styles.title}>Virtual Factory Experience</h2>
      <p className={styles.line}>Explore. Connect. Experience.</p>
    </section>
  );
}
