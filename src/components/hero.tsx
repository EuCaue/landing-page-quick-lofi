"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

export type HeroProps = HTMLMotionProps<"div">;

export default function Hero({ children, className, ...rest }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      {...rest}
      className={cn(
        "min-h-screen w-full flex items-center justify-center flex-col",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
