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
    <section id="productos" className="bg-white py-16 md:py-16">
      <div className="mx-auto px-4 container">
        <div className="flex flex-row justify-between items-center align-middle">
          <h2 className="mb-5 font-light font-montserrat text-[#E5202D] text-3xl text-center md:text-4xl">
            Nuestras Marcas Destacadas
          </h2>
        </div>
        <div className="flex flex-row justify-end items-end md:mb-4 align-middle">
          <div className="flex flex-row justify-center items-end">
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
                Ir a Productos
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-row justify-center items-start w-full">
            {[
              "/assets/logos/marcaDestacada_PARKER.png",
              "/assets/logos/marcaDestacada_ATOS.png",
              "/assets/logos/marcaDestacada_REXROTH.png",
            ].map((item, key) => (
              <Image src={item} alt="ImageBrand" width={300} height={300} />
            ))}
          </div>
          <DistributeBrandsHomeSection />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
