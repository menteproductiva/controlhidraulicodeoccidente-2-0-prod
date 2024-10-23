"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, Users, Lightbulb, HeartHandshake } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const OurValuesSection = () => {
  return (
    <section className="bg-white px-4 md:px-8 py-16">
      <motion.h2
        className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl"
        {...fadeInUp}
      >
        Nuestros Pilares
      </motion.h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl">
        {[
          {
            icon: Check,
            title: "Responsabilidad",
            description:
              "We ensure the highest standards in every product and service.",
          },
          {
            icon: Lightbulb,
            title: "Puntualidad",
            description:
              "Constantly pushing the boundaries of hydraulic technology.",
          },
          {
            icon: HeartHandshake,
            title: "Compromiso",
            description:
              "Dedicated support and solutions tailored to your needs.",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              className="mx-auto mb-4 w-16 h-16 text-[#E5202D]"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <value.icon size={64} />
            </motion.div>
            <h3 className="mb-2 font-['Montserrat'] font-light text-black text-center text-xl">
              {value.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
