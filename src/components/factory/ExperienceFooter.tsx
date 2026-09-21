import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import styles from "./FactoryLayout.module.css";

const globalLinks = [
  {
    href: "/tours",
    number: "01",
    title: "ALL VIRTUAL TOURS",
    titleAr: "جميع الجولات الافتراضية",
  },
  {
    href: "/gallery",
    number: "02",
    title: "PHOTO GALLERY",
    titleAr: "معرض الصور",
  },
  {
    href: "/videos",
    number: "03",
    title: "VIDEOS",
    titleAr: "مكتبة الفيديو",
  },
];

export function ExperienceFooter() {
  return (
    <>
      <section className={styles.section} aria-label="Experience links">
        <div className={styles.globalLinks}>
          {globalLinks.map((item) => (
            <Link className={styles.globalLink} href={item.href} key={item.href}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <span dir="rtl">{item.titleAr}</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.finalFooter}>
        <BrandMark className={styles.footerLogo} />
        <strong>ALMUTAHIDA PACKAGING</strong>
        <span>Virtual Factory Experience</span>
        <Link className={styles.homeLink} href="/">
          BACK TO HOME
        </Link>
      </footer>
    </>
  );
}
