"use client";

import { useState } from "react";
import { MatterportViewer } from "@/components/matterport/MatterportViewer";
import type { Tour } from "@/types/tour";

type TourLauncherProps = {
  tour: Tour;
  label?: string;
};

export function TourLauncher({ tour, label = "Open tour" }: TourLauncherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="touch-target" type="button" onClick={() => setIsOpen(true)}>
        {label}
      </button>

      {isOpen ? (
        <MatterportViewer
          title={tour.titleEn}
          matterportUrl={tour.matterportUrl}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
