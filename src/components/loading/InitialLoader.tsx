"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import styles from "./InitialLoader.module.css";

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.loader} role="status" aria-label="Loading Almutahida virtual tours">
      <div className={styles.reveal}>
        <BrandMark className={styles.logo} />
      </div>
    </div>
  );
}
