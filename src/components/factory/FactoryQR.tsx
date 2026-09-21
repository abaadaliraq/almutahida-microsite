"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

async function exists(src: string) {
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function FactoryQR({ tour }: { tour: Tour }) {
  const [qrAvailable, setQrAvailable] = useState(false);

  useEffect(() => {
    let mounted = true;
    exists(tour.qrImage).then((ok) => {
      if (mounted) setQrAvailable(ok);
    });
    return () => {
      mounted = false;
    };
  }, [tour.qrImage]);

  return (
    <section className={`${styles.section} ${styles.qrGrid}`} aria-labelledby="factory-qr">
      <div>
        <p className={styles.kicker}>Mobile Access</p>
        <h2 id="factory-qr" className={styles.heading}>
          CONTINUE ON YOUR PHONE
        </h2>
        <p className={styles.headingAr} dir="rtl">
          تابع الجولة من هاتفك
        </p>
        <div className={styles.qrText}>
          <p dir="rtl">امسح الرمز لفتح الجولة مباشرة على هاتفك.</p>
          <p>Scan the code to continue exploring this virtual factory on your phone.</p>
        </div>
      </div>
      <div className={styles.qrBox}>
        {qrAvailable ? (
          <img className={styles.qrImage} src={tour.qrImage} alt={`${tour.titleEn} QR code`} />
        ) : (
          <span className={styles.qrMissing}>QR code coming soon</span>
        )}
        <a className={styles.openTourLink} href={tour.qrDestinationUrl}>
          OPEN TOUR
        </a>
      </div>
    </section>
  );
}
