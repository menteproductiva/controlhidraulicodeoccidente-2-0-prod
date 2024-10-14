import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };


  

const OurPartnetsSection = () => {
  return (
    <section className="bg-gray-100 px-4 md:px-8 py-16">
      <motion.h2
        className="mb-8 font-['Montserrat'] font-light text-[#2D3688] text-3xl text-center md:text-4xl"
        {...fadeInUp}
      >
        Our Partners
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5, 6].map((partner, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center bg-white shadow-md rounded-lg w-32 h-32"
            variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
            }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={`/placeholder.svg?text=Partner${partner}&width=100&height=100`}
              alt={`Partner ${partner}`}
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurPartnetsSection;
