"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

type OptionalImageProps = {
  src: string;
  alt: string;
  className?: string;
  placeholderLabel?: string;
};

export function OptionalImage({
  src,
  alt,
  className,
  placeholderLabel = "Image pending",
}: OptionalImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return <MediaPlaceholder label={placeholderLabel} className={className} />;
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailedSrc(src)} />;
}
