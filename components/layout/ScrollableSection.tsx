"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Product from "./Product";
import DiscovaFamily from "./DiscoverFamily";
import DiscoverPage from "./Discover";

const ScrollableSections = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  //working !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOT SMOOTH!!!!!!!!
  // Smooth scrolling effect
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
  });

  // Ensuring sections snap perfectly
  const xTransform = useTransform(smoothScroll, [0, 1], ["0%", "-200%"]);

  // Animation: Slide-in Effect
  const scale = useTransform(smoothScroll, [0, 1], [1, 0.95]);
  const opacity = useTransform(smoothScroll, [0, 1], [1, 0.8]);
  const rotateY = useTransform(smoothScroll, [0, 1], ["0deg", "5deg"]);

  return (
    <div ref={scrollRef} className="relative h-[300vh] overflow-hidden">
      {/* The pinned scroll effect */}
      <motion.div
        style={{ x: xTransform, scale, opacity, rotateY }}
        className="flex w-[300vw] h-screen sticky top-0 snap-x snap-mandatory"
      >
        <motion.div
          className="w-screen h-full flex-shrink-0 snap-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Product />
        </motion.div>

        <motion.div
          className="w-screen h-full flex-shrink-0 snap-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <DiscoverPage />
        </motion.div>

        <motion.div
          className="w-screen h-full flex-shrink-0 snap-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <DiscovaFamily />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollableSections;
