"use client";

import { useEffect, useState } from "react";
import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

async function exists(src?: string) {
  if (!src) return false;
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function FactoryVideo({ tour }: { tour: Tour }) {
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [posterAvailable, setPosterAvailable] = useState(false);

  useEffect(() => {
    let mounted = true;
    Promise.all([exists(tour.video), exists(tour.posterImage)]).then(([hasVideo, hasPoster]) => {
      if (mounted) {
        setVideoAvailable(hasVideo);
        setPosterAvailable(hasPoster);
      }
    });
    return () => {
      mounted = false;
    };
  }, [tour.posterImage, tour.video]);

  if (!videoAvailable || !tour.video) return null;

  return (
    <section className={styles.section} aria-labelledby="factory-video">
      <div className={styles.videoEditorial}>
        <div>
          <p className={styles.kicker}>Factory in Motion</p>
          <h2 id="factory-video" className={styles.heading}>
            FACTORY IN MOTION
          </h2>
          <p className={styles.headingAr} dir="rtl">
            المعمل أثناء العمل
          </p>
        </div>
        <video
          className={styles.video}
          controls
          playsInline
          preload="metadata"
          poster={posterAvailable ? tour.posterImage : undefined}
        >
          <source src={tour.video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
