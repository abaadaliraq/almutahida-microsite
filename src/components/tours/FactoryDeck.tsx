"use client";

import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { tours } from "@/data/tours";
import { FactoryCard } from "./FactoryCard";
import styles from "./FactoryDeck.module.css";

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function shortestPosition(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  const wrappedForward = raw + length;
  const wrappedBackward = raw - length;
  return [raw, wrappedForward, wrappedBackward].reduce((closest, value) =>
    Math.abs(value) < Math.abs(closest) ? value : closest,
  );
}

export function FactoryDeck() {
  const availableTours = useMemo(
    () => tours.filter((tour) => tour.enabled).sort((a, b) => a.order - b.order),
    [],
  );
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

  function moveBy(delta: number) {
    setActiveIndex((current) => wrapIndex(current + delta, availableTours.length));
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    dragStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    moveBy(distance > 0 ? -1 : 1);
  }

  if (!availableTours.length) {
    return null;
  }

  return (
    <>
      <div
        className={styles.deckStage}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragStartX.current = null;
        }}
      >
        <div className={styles.depthLine} aria-hidden="true" />
        {availableTours.map((tour, index) => {
          const position = shortestPosition(index, activeIndex, availableTours.length);
          const isActive = index === activeIndex;

          return (
            <FactoryCard
              key={tour.id}
              tour={tour}
              position={position}
              isActive={isActive}
              totalTours={availableTours.length}
              onClick={() => {
                if (isActive) {
                  router.push(`/tours/${tour.slug}`);
                  return;
                }

                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>

      <div className={styles.indicator} aria-label="Factory deck indicator">
        {availableTours.map((tour, index) => (
          <button
            className={index === activeIndex ? styles.activeIndicator : styles.indicatorButton}
            type="button"
            key={tour.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${tour.titleEn}`}
          >
            {String(tour.order).padStart(2, "0")}
          </button>
        ))}
      </div>
    </>
  );
}
