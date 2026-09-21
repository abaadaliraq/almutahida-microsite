"use client";

import { useMemo, useState } from "react";
import { OptionalImage } from "@/components/ui/OptionalImage";
import { tours } from "@/data/tours";
import styles from "./QRToursSection.module.css";

function formatTourNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function QRToursSection() {
  const availableTours = useMemo(
    () => tours.filter((tour) => tour.enabled).sort((a, b) => a.order - b.order),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTour = availableTours[activeIndex] ?? availableTours[0];

  if (!activeTour) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="qr-title">
      <div className={styles.copy}>
        <p className={styles.kicker}>Continue on Your Phone</p>
        <h2 id="qr-title" className={styles.heading}>
          TAKE THE EXPERIENCE WITH YOU
        </h2>
        <div className={styles.text}>
          <p dir="rtl">خذ التجربة معك</p>
          <p dir="rtl">امسح رمز الجولة التي تريد استكشافها، وتابع التجربة مباشرة من هاتفك.</p>
          <p>Scan a tour and continue exploring directly from your phone.</p>
        </div>
      </div>

      <div className={styles.panel}>
        <nav className={styles.selector} aria-label="QR tour selector">
          {availableTours.map((tour, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                className={isActive ? styles.activeSelectorButton : styles.selectorButton}
                type="button"
                key={tour.id}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
              >
                <span>{formatTourNumber(index)}</span>
                <span>{tour.titleEn}</span>
              </button>
            );
          })}
        </nav>

        <article className={styles.qrDisplay} key={activeTour.id}>
          <div className={styles.qrMeta}>
            <p>{formatTourNumber(activeIndex)} — {activeTour.titleEn.toUpperCase()}</p>
            <h3 dir="rtl">{activeTour.titleAr}</h3>
          </div>

          <div className={styles.qrFrame}>
            <OptionalImage
              src={activeTour.qrImage}
              alt={`${activeTour.titleEn} QR code`}
              className={styles.qrImage}
              placeholderLabel="QR code coming soon"
            />
          </div>

          <p className={styles.scanLabel}>SCAN TO EXPLORE</p>
          <a className={styles.mobileOpen} href={activeTour.qrDestinationUrl}>
            OPEN TOUR ↗
          </a>
        </article>
      </div>
    </section>
  );
}
