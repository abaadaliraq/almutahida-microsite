"use client";

import { useEffect, useState } from "react";
import styles from "./MatterportViewer.module.css";

type MatterportViewerProps = {
  title: string;
  matterportUrl: string;
  onClose?: () => void;
};

export function MatterportViewer({ title, matterportUrl, onClose }: MatterportViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <section className={styles.viewer} aria-label={title}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {onClose ? (
          <button className={`${styles.closeButton} touch-target`} type="button" onClick={onClose}>
            <span>Back</span>
            <span>Close Tour</span>
          </button>
        ) : null}
      </div>

      <div className={styles.stage}>
        {isLoading ? <div className={styles.loading}>Loading virtual tour</div> : null}
        <iframe
          className={styles.frame}
          src={matterportUrl}
          title={title}
          allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </section>
  );
}
