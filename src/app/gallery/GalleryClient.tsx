"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import { tours } from "@/data/tours";
import styles from "@/components/factory/FactoryLayout.module.css";

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(
    () =>
      tours.flatMap((tour) =>
      tour.gallery.map((src) => ({ src, slug: tour.slug, title: tour.titleEn })),
      ),
    [],
  );

  const filteredItems = useMemo(
    () => items.filter((item) => activeFilter === "all" || item.slug === activeFilter),
    [activeFilter, items],
  );

  return (
    <>
      <div className={styles.filterBar}>
        {["all", ...tours.map((tour) => tour.slug)].map((filter) => (
          <button
            className={filter === activeFilter ? styles.activeFilter : styles.filterButton}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "all" ? "ALL" : filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.galleryGrid}>
        {filteredItems.map((item, index) => (
          <button
            className={index % 3 === 0 ? styles.galleryLarge : styles.gallerySmall}
            type="button"
            key={item.src}
            onClick={() => setLightbox(item.src)}
          >
            <img src={item.src} alt={`${item.title} gallery`} />
          </button>
        ))}
      </div>

      {lightbox ? (
        <button className={styles.lightbox} type="button" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Factory gallery enlarged" />
        </button>
      ) : null}
    </>
  );
}
