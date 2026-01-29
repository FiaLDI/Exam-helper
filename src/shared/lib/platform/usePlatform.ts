"use client";

import { useState } from "react";

export type PlatformInfo = {
  isIOS: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  mounted: boolean;
};

export function usePlatform(): PlatformInfo {
  const [platform] = useState<PlatformInfo>(() => {
    if (typeof window === "undefined") {
      return {
        isIOS: false,
        isMobile: false,
        prefersReducedMotion: false,
        mounted: false,
      };
    }

    const ua = navigator.userAgent;

    return {
      isIOS: /iPad|iPhone|iPod/.test(ua),
      isMobile: window.matchMedia("(pointer: coarse)").matches,
      prefersReducedMotion: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches,
      mounted: true,
    };
  });

  return platform;
}
