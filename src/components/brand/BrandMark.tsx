"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { brandAssets } from "@/lib/assets";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  const [logoAvailable, setLogoAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(brandAssets.logo, { method: "HEAD" })
      .then((response) => {
        if (isMounted) {
          setLogoAvailable(response.ok);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLogoAvailable(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (logoAvailable) {
    return <img src={brandAssets.logo} alt="Almutahida" className={className} />;
  }

  return (
    <div
      className={[
        "relative h-20 w-20 overflow-hidden rounded-sm border border-white/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Almutahida logo placeholder"
      role="img"
    >
      <span className="absolute inset-x-4 top-4 h-10 origin-bottom-left -skew-x-12 bg-[var(--almutahida-navy)]" />
      <span className="absolute bottom-4 right-4 h-10 w-8 origin-bottom-left skew-x-12 bg-[var(--almutahida-green)]" />
    </div>
  );
}
