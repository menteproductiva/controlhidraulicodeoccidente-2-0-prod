"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonNeubrutalism from "@/components/ButtonNeubratalism/ButtonNeubrutalism";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="top-0 left-0 absolute w-full h-1/4"></div>
      <div className="relative z-10 flex lg:flex-row flex-col justify-between items-center space-y-6 lg:space-y-0 mx-auto container">
        {/* Ajuste de la imagen */}
        <div className="relative lg:-top-0 flex justify-center w-full lg:w-1/2">
          <Image
            src="/assets/imgConoce_1.jpg"
            alt="Plano de Equipamiento Hidráulico"
            width={500}
            height={500}
            className="shadow-lg transform rotate-3"
          />
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg w-full lg:w-1/2">
          <h2 className="mb-4 font-bold text-3xl text-black">
            Conoce nuestras soluciones
          </h2>
          <p className="mb-6 text-gray-700">
            Deja tus datos ahora y recibe una consulta gratuita sobre nuestros
            sistemas de equipamiento hidráulico.
          </p>
          <Link href="/Products">
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
                Explorar
              </motion.button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
