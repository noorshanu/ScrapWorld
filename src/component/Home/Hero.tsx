"use client";

import React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <StatsSection />
  );
};

export default Hero;

// Stats with animated counters
type StatItem = { label: string; value: number; suffix?: string };

const STATS: StatItem[] = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Countries", value: 60, suffix: "+" },
  { label: "Manpower", value: 600, suffix: "+" },
  { label: "Inventory Lots", value: 1200, suffix: "+" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="w-full bg-white/90">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((s) => (
            <motion.article
              key={s.label}
              variants={cardVariants}
              className="rounded-xl border-2 border-[#2474A5] bg-white shadow-sm px-6 py-8 text-center"
            >
              <div className="text-sm font-semibold tracking-wide text-gray-700">{s.label}</div>
              <div className="mt-3 text-4xl sm:text-5xl font-extrabold text-[#1f2a5a]">
                <CountUp target={s.value} />{s.suffix ?? ""}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CountUp: React.FC<{ target: number; durationMs?: number }> = ({ target, durationMs = 1600 }) => {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest).toLocaleString());

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, { duration: durationMs / 1000 });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <motion.span ref={ref} aria-label={`count to ${target}`}>
      {rounded as unknown as React.ReactNode}
    </motion.span>
  );
};