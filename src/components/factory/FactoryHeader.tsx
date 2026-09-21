import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

type FactoryHeaderProps = {
  tour: Tour;
  totalTours: number;
};

const navigationItems = [
  { href: "/", title: "HOME" },
  { href: "/tours", title: "VIRTUAL TOURS" },
  { href: "/gallery", title: "GALLERY" },
  { href: "/videos", title: "VIDEOS" },
];

export function FactoryHeader({ tour, totalTours }: FactoryHeaderProps) {
  return (
    <nav className={styles.topBar} aria-label="Factory navigation">
      <Link className={styles.logoLink} href="/" aria-label="Almutahida home">
        <BrandMark className={styles.logo} />
      </Link>

      <div className={styles.navLinks}>
        {navigationItems.map((item) => (
          <Link
            className={item.href === "/tours" ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
            href={item.href}
            key={item.href}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      <div className={styles.navMeta}>
        <Link className={styles.allFactoriesLink} href="/#tours">
          ALL FACTORIES
        </Link>
        <p className={styles.count}>
          {String(tour.order).padStart(2, "0")} / {String(totalTours).padStart(2, "0")}
        </p>
      </div>
    </nav>
  );
}
