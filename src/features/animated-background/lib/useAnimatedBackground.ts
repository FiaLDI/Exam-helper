"use client";

import { useTransform } from "framer-motion";
import { IComponentProps } from "../ui/interface";

const THEMES = [
  { base: "#020617", accent: "rgba(99,102,241,0.35)" },
  { base: "#020617", accent: "rgba(168,85,247,0.35)" },
  { base: "#020617", accent: "rgba(14,165,233,0.35)" },
  { base: "#020617", accent: "rgba(236,72,153,0.35)" },
  { base: "#020617", accent: "rgba(34,197,94,0.35)" },
];

export const useAnimatedBackground = ({index, progress, projectsProgress}: IComponentProps) => {
    const theme = THEMES[index % THEMES.length];

    const scale = useTransform(progress, [0, 1], [1, 1.2]);
    const opacity = useTransform(progress, [0, 1], [0.25, 0.45]);

    const projectsGlow = useTransform(
        projectsProgress,
        [0, 1],
        [0.25, 0.6]
    );

    const projectsScale = useTransform(
        projectsProgress,
        [0, 1],
        [1, 1.35]
    );
    return {theme, scale, opacity, projectsGlow, projectsScale};
}