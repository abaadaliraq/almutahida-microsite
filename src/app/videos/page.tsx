import styles from "@/components/factory/FactoryLayout.module.css";
import { VideosClient } from "./VideosClient";

export const metadata = {
  title: "Factory Films | Almutahida",
};

export default function VideosPage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.frame}>
        <section className={styles.intro}>
          <p className={styles.introNumber}>03</p>
          <div>
            <h1 className={styles.title}>FACTORY FILMS</h1>
            <p className={styles.titleAr} dir="rtl">
              الفيديوات
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <VideosClient />
        </section>
      </div>
    </main>
  );
}
