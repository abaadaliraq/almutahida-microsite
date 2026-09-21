import { GalleryClient } from "./GalleryClient";
import styles from "@/components/factory/FactoryLayout.module.css";

export const metadata = {
  title: "Factory Gallery | Almutahida",
};

export default function GalleryPage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.frame}>
        <section className={styles.intro}>
          <p className={styles.introNumber}>02</p>
          <div>
            <h1 className={styles.title}>FACTORY GALLERY</h1>
            <p className={styles.titleAr} dir="rtl">
              معرض الصور
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <GalleryClient />
        </section>
      </div>
    </main>
  );
}
