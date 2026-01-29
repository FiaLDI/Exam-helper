"use client";

import { MotionValue } from "framer-motion";

import { usePlatform } from "@/shared/lib/platform";
import { useBackgroundTheme } from "../model/useBackgroundTheme";
import { useBackgroundMotion } from "../model/useBackgroundMotion";

import { DesktopBackground } from "./DesktopBackground";
import { MobileBackground } from "./MobileBackground";
import { IOSBackground } from "./IOSBackground";

export interface IComponentProps {
  index: number;
  progress: MotionValue<number>;
  projectsProgress: MotionValue<number>;
}

export function AnimatedBackground({
  index,
  progress,
  projectsProgress,
}: IComponentProps) {
  const theme = useBackgroundTheme(index);
  const motion = useBackgroundMotion(
    progress,
    projectsProgress
  );

  const {
    isIOS,
    isMobile,
    prefersReducedMotion,
    mounted,
  } = usePlatform();

  /**
   * SSR + первый client render
   * ВСЕГДА одинаковый
   */
  if (!mounted) {
    return <IOSBackground theme={theme} />;
  }

  if (isIOS || prefersReducedMotion) {
    return <IOSBackground theme={theme} />;
  }

  if (isMobile) {
    return <MobileBackground theme={theme} />;
  }

  return (
    <DesktopBackground
      index={index}
      theme={theme}
      {...motion}
    />
  );
}
