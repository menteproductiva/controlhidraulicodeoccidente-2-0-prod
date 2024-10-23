"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import CardCarousel from "@/components/CardCarousel/CardCarousel";


const products = [
  {
    title: "Bomba Hidráulica de Alta Presión",
    description: "Ideal para aplicaciones industriales exigentes.",
    url: "/assets/products/bomba.jpg",
  },
  {
    title: "Válvula de Control Proporcional",
    description: "Precisión excepcional en el control de flujo hidráulico.",
    url: "/assets/products/valvula.jpeg",
  },
  {
    title: "Cilindro Hidráulico",
    description:
      "Diseñado para soportar cargas pesadas y uso intensivo en cadenas de suministros.",
    url: "/assets/products/cilindro.jpg",
  },
  {
    title: "Sistema de Filtración Avanzado",
    description:
      "Mantiene la pureza del fluido hidráulico para un rendimiento óptimo.",
    url: "/assets/products/sistema.jpeg",
  },
];

const ProductSection = () => {
  const x = useSpring(0.5);
  const y = useSpring(0.5);

  useEffect(() => {
    x.set(1);
  }, []);

  return (
    <section id="productos" className="bg-white py-16 md:py-24">
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
          Productos Destacados
        </h2>
        <div 
        className="flex flex-col items-center w-full"
        >
          <CardCarousel items={products}/>
        </div>
        <div className="flex flex-row justify-center items-end mt-12">
          <motion.div
            className="flex justify-center items-center bg-[#2D3688] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] p-6 rounded-lg w-1/5 h-10 text-white text-xl cursor-pointer"
            style={{ scale: x }}
          >
            <Link href="/Products">
              Ver más
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
