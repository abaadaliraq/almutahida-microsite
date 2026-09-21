"use client";

import { useEffect, useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

type OptionalVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  placeholderLabel?: string;
};

async function assetExists(src: string) {
  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function OptionalVideo({
  src,
  poster,
  className,
  placeholderLabel = "Video pending",
}: OptionalVideoProps) {
  const [isVideoAvailable, setIsVideoAvailable] = useState(false);
  const [isPosterAvailable, setIsPosterAvailable] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all([assetExists(src), poster ? assetExists(poster) : false]).then(
      ([hasVideo, hasPoster]) => {
        if (isMounted) {
          setIsVideoAvailable(hasVideo);
          setIsPosterAvailable(Boolean(hasPoster));
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, [poster, src]);

  if (!isVideoAvailable) {
    return <MediaPlaceholder label={placeholderLabel} className={className} />;
  }

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={isPosterAvailable ? poster : undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
