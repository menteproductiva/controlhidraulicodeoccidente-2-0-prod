import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DoubleScrollingLogos from "@/components/DoubleScrollingLogos/DoubleScrollingLogos";


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };


  

const OurPartnetsSection = () => {
  return (
    <section className="bg-white px-4 md:px-8 py-16">
      <motion.h2
        className="mb-8 font-light text-[#2D3688] text-3xl text-center md:text-4xl"
        {...fadeInUp}
      >
        Nuestras Marcas
      </motion.h2>
      <DoubleScrollingLogos />
    </section>
  );
};

export default OurPartnetsSection;
