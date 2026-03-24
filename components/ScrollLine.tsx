'use client';

import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const yPos = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[1px] bg-outline z-50 pointer-events-none hidden sm:block">
      <motion.div
        className="absolute top-0 left-0 right-0 bg-primary origin-top"
        style={{ scaleY, height: '100%' }}
      />
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-bg border-2 border-primary shadow-[0_0_15px_rgba(0,225,171,0.8)]"
        style={{ top: yPos, marginTop: '-6px' }}
      />
    </div>
  );
}
