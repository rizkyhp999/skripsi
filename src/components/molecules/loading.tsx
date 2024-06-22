import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LoadingSkeleton = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to right, #FFD700, #DAA520)", // Gold ke Goldenrod
        "linear-gradient(to right, #DAA520, #B8860B)", // Goldenrod ke Dark Goldenrod
        "linear-gradient(to right, #B8860B, #FFD700)", // Dark Goldenrod kembali ke Gold
      ],
      transition: {
        duration: 4,
        ease: "linear",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    });
  }, [controls]);

  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 h-2 overflow-hidden">
      <motion.div className="h-full w-full" animate={controls} />
    </motion.div>
  );
};

export default LoadingSkeleton;
