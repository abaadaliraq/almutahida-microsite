"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react";
import type { Tour } from "@/types/tour";
import styles from "./FactoryLayout.module.css";

export function FactoryGallery({ tour }: { tour: Tour }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = tour.gallery;
  const lightboxImage = lightboxIndex === null ? null : images[lightboxIndex];
  const firstRow = images.slice(0, 2);
  const secondRow = images.slice(2, 4);
  const remainingRows = images.slice(4);

  const showNextImage = useCallback(() => {
    setLightboxIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  }, [images.length]);

  const showPreviousImage = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? images.length - 1 : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNextImage, showPreviousImage]);

  if (!images.length) return null;

  return (
    <section className={styles.section} aria-labelledby="factory-gallery">
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}>From the Tour</p>
          <h2 id="factory-gallery" className={styles.heading}>
            FROM THE TOUR
          </h2>
          <p className={styles.headingAr} dir="rtl">
            من داخل الجولة
          </p>
        </div>
      </div>
      <div className={styles.editorialGallery}>
        <div className={styles.galleryRow}>
          {firstRow[0] ? (
            <button className={styles.galleryImageLarge} type="button" onClick={() => setLightboxIndex(0)}>
              <img src={firstRow[0]} alt={`${tour.titleEn} gallery 1`} />
            </button>
          ) : null}
          <div className={styles.galleryAside}>
            <div className={styles.galleryTextBlock}>
              <p>{tour.titleEn}</p>
              <p dir="rtl">{tour.titleAr}</p>
            </div>
            {firstRow[1] ? (
              <button className={styles.galleryImageSmall} type="button" onClick={() => setLightboxIndex(1)}>
                <img src={firstRow[1]} alt={`${tour.titleEn} gallery 2`} />
              </button>
            ) : null}
          </div>
        </div>

        {secondRow.length ? (
          <div className={`${styles.galleryRow} ${styles.galleryRowReverse}`}>
            {secondRow.map((image, index) => (
              <button
                className={secondRow.length === 1 || index === 1 ? styles.galleryImageLarge : styles.galleryImageSmall}
                type="button"
                key={image}
                onClick={() => setLightboxIndex(index + 2)}
              >
                <img src={image} alt={`${tour.titleEn} gallery ${index + 3}`} />
              </button>
            ))}
          </div>
        ) : null}

        {remainingRows.length ? (
          <div className={styles.galleryPairGrid}>
            {remainingRows.map((image, index) => (
            <button
              className={styles.galleryImageSmall}
              type="button"
              key={image}
              onClick={() => setLightboxIndex(index + 4)}
            >
              <img src={image} alt={`${tour.titleEn} gallery ${index + 5}`} />
            </button>
          ))}
          </div>
        ) : null}
      </div>
      {lightboxImage ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${tour.titleEn} gallery image`}
        >
          <button className={styles.lightboxClose} type="button" onClick={() => setLightboxIndex(null)}>
            CLOSE
          </button>
          <button className={styles.lightboxNav} type="button" onClick={showPreviousImage} aria-label="Previous image">
            ←
          </button>
          <img src={lightboxImage} alt={`${tour.titleEn} enlarged`} />
          <button className={styles.lightboxNav} type="button" onClick={showNextImage} aria-label="Next image">
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}
