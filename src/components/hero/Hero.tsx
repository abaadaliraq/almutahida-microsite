"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import styles from "./Hero.module.css";

const heroVideo = "/videos/hero.mp4";
const heroPoster = "/videos/hero-poster.jpg";

async function assetExists(src: string) {
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function Hero() {
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [posterAvailable, setPosterAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all([assetExists(heroVideo), assetExists(heroPoster)]).then(
      ([hasVideo, hasPoster]) => {
        if (isMounted) {
          setVideoAvailable(hasVideo);
          setPosterAvailable(hasPoster);
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  function scrollToTours() {
    const toursAnchor = document.getElementById("tours");

    if (toursAnchor) {
      toursAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    scrollDown();
  }

  return (
    <section className={styles.hero} aria-label="Almutahida virtual factory experience">
      <div className={styles.media} aria-hidden="true">
        {videoAvailable ? (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterAvailable ? heroPoster : undefined}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div className={styles.fallback} />
        )}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <BrandMark className={styles.logo} />

        <div className={styles.content}>
          <p className={styles.label}>ALMUTAHIDA PACKAGING</p>

          <h1 className={styles.title}>
            <span>Explore Almutahida</span>
            <span>Virtual Factory Experience</span>
          </h1>

          <div className={styles.copy}>
            <p dir="rtl">
              استكشف المصانع وخطوط الإنتاج من خلال تجربة افتراضية تفاعلية بتقنية 360°
            </p>
            <p>
              Explore our facilities and production lines through an immersive 360°
              virtual experience.
            </p>
          </div>

          <div className={styles.actions} aria-label="Hero actions">
            <button className={styles.primaryAction} type="button" onClick={scrollDown}>
              <span dir="rtl">ابدأ الاستكشاف</span>
              <span>Explore</span>
            </button>
            <button className={styles.secondaryAction} type="button" onClick={scrollToTours}>
              <span dir="rtl">الجولات الافتراضية</span>
              <span>Virtual Tours</span>
            </button>
          </div>
        </div>

        <button className={styles.scrollIndicator} type="button" onClick={scrollDown}>
          <span>Scroll to Explore</span>
          <span className={styles.scrollLine} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
