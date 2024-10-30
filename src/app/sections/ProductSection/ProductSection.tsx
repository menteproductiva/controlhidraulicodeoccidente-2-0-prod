"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import CardCarousel from "@/components/CardCarousel/CardCarousel";
import DistributeBrandsHomeSection from "../DistributeBrandsHomeSection/DistributeBrandsHomeSection";
import Image from "next/image";

const products = [
  {
    title: "Bomba Hidráulica de Alta Presión",
    description: "Ideal para aplicaciones industriales exigentes.",
    url: "/assets/products/Hydraulic_Pump.jpg",
  },
  {
    title: "Válvula de Control Proporcional",
    description: "Precisión excepcional en el control de flujo hidráulico.",
    url: "/assets/products/valvula_control.jpg",
  },
  {
    title: "Cilindro Hidráulico",
    description:
      "Diseñado para soportar cargas pesadas y uso intensivo en cadenas de suministros.",
    url: "/assets/products/hydraulic_cylinder.jpg",
  },
  {
    title: "Sistema de Filtración Avanzado",
    description:
      "Mantiene la pureza del fluido hidráulico para un rendimiento óptimo.",
    url: "/assets/products/sistema_filtracion.jpg",
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
        <div className="flex flex-row justify-between items-center align-middle">
          <h2 className="mb-5 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
            Nuestras Marcas Destacadas
          </h2>
         <div className="flex flex-row justify-center items-end">
          <div
            className="flex justify-center items-center bg-[#2D3688] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] p-6 rounded-lg w-full h-10 text-white text-xl cursor-pointer"

          >
            <Link href="/Products">
              Ver más
            </Link>
          </div>
        </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-row justify-center items-start w-full">
            {
              ['/assets/logos/marcaDestacada_PARKER.png','/assets/logos/marcaDestacada_ATOS.png','/assets/logos/marcaDestacada_REXROTH.png'].map((item,key) => (
                <Image
                  src={item}
                  alt="ImageBrand"
                  width={300}
                  height={300}
                />
              ))
            }
          </div>
          <DistributeBrandsHomeSection />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
