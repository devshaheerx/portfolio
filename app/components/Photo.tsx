"use client";

import { useEffect, useState } from "react";
import { profile } from "../data";

// Shows public/profile.jpg. Until that file exists, it shows your initials instead.
export default function Photo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = profile.photo;
  }, []);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl bg-navy ring-1 ring-line">
      {loaded ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={profile.name}
          className="grid h-full w-full place-items-center font-display text-[72px] font-semibold text-white/90"
        >
          SS
        </div>
      )}
      <span className="absolute bottom-0 left-0 h-1.5 w-full bg-brand" aria-hidden />
    </div>
  );
}
