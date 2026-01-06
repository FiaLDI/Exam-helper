"use client";

import { motion } from "framer-motion";
import { IComponentProps } from "./interface";
import { useAnimatedBackground } from "../lib";


export function Component({index, progress, projectsProgress}: IComponentProps) {
  const { theme, scale, opacity, projectsGlow, projectsScale} = useAnimatedBackground({index, progress, projectsProgress});
  
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      animate={{ backgroundColor: theme.base }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* LIGHT SWEEP */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `
            radial-gradient(
              800px at ${50 + index * 5}% ${30 + index * 8}%,
              ${theme.accent},
              transparent 60%
            )
          `,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* BLOB 1 */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px]"
        style={{
          background: theme.accent,
          scale,
          opacity,
        }}
        animate={{
          x: index * 60 - 200,
          y: index * 40 - 200,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* BLOB 2 */}
      <motion.div
        className="absolute right-[-300px] bottom-[-300px] w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ background: theme.accent }}
        animate={{
          x: -index * 50,
          y: -index * 30,
        }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background: theme.accent,
          opacity: projectsGlow,
          scale: projectsScale,
        }}
        animate={{
          x: index * 60 - 200,
          y: index * 40 - 200,
        }}
      />


      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
    </motion.div>
  );
}
