"use client";
import React, { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { relative } from "path";
interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const AnimasiMuncul = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "auto", overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 0.25 },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className="w-auto h-auto"
      >
        {" "}
        {children}
      </motion.div>

      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.2, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "gold", // Menggunakan nilai warana emas dengan nama warna CSS
          zIndex: 20,
        }}
        className="w-auto h-auto"
      ></motion.div> */}
    </div>
  );
};

export const TextGlowing = ({ children, width = "fit-content" }: Props) => {
  return (
    <>
      <motion.div
        // animate={{ type: "spring" }}
        whileHover={{
          scale: 1.1,
          color: "#FFD700",
          textShadow: "0px 0px 21px #FFD700",
        }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {children}
      </motion.div>
    </>
  );
};
