"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo/AnimatedLogo";

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="bg-white py-12 md:py-24">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="mb-4 font-light font-montserrat text-[#E5202D] text-2xl md:text-4xl">
              Quiénes Somos
            </h2>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Control Hidráulico de Occidente S.A. de C.V. es una empresa líder
              en la industria de equipos hidráulicos y soluciones de ingeniería.
              Con casi cuatro décadas de experiencia, nos hemos consolidado como
              referentes en el sector de la oleohidráulica.
            </p>
            <p className="mb-6 text-base text-gray-700 md:text-lg">
              Nuestro compromiso con la excelencia y la innovación nos impulsa a
              ofrecer soluciones de vanguardia que satisfacen las necesidades
              más exigentes de nuestros clientes en diversos sectores
              industriales.
            </p>
            <Link href="/Contact">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#E5202D",
                }}
                transition={{ duration: 0.5, yoyo: Infinity }}
                style={{
                  padding: "12px 25px",
                  outline: "none",
                  backgroundColor: "#2D3688",
                  color: "#fff",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                }}
              >
                Conócenos
              </motion.button>
            </Link>
          </div>
          <div className="mb-8 md:mb-0 md:pl-16 md:w-1/2">
            <AnimatedLogo className="mx-auto my-auto p-10 w-96 h-96 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
