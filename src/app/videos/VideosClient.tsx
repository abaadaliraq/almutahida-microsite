"use client";

import { useEffect, useState } from "react";
import { tours } from "@/data/tours";
import type { Tour } from "@/types/tour";
import styles from "@/components/factory/FactoryLayout.module.css";

async function exists(src?: string) {
  if (!src) return false;
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function VideosClient() {
  const [videoTours, setVideoTours] = useState<Tour[]>([]);

  useEffect(() => {
    let mounted = true;
    Promise.all(tours.map(async (tour) => ({ tour, ok: await exists(tour.video) }))).then(
      (results) => {
        if (mounted) setVideoTours(results.filter((item) => item.ok).map((item) => item.tour));
      },
    );
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={styles.galleryGrid}>
      {videoTours.map((tour) => (
        <article className={styles.galleryLarge} key={tour.id}>
          <video className={styles.video} controls playsInline preload="metadata">
            <source src={tour.video} type="video/mp4" />
          </video>
          <div className={styles.otherBody}>
            <span className={styles.otherNumber}>{String(tour.order).padStart(2, "0")}</span>
            <strong className={styles.otherTitle}>{tour.titleEn.toUpperCase()}</strong>
            <span className={styles.otherTitleAr} dir="rtl">
              {tour.titleAr}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
