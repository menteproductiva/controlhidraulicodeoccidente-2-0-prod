"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import DistributeBrandsHomeSection from "../DistributeBrandsHomeSection/DistributeBrandsHomeSection";
import Image from "next/image";

const ProductSection = () => {
  const x = useSpring(0.5);

  useEffect(() => {
    x.set(1);
  }, []);

  return (
    <section id="productos" className="bg-white py-12 md:py-16">
      <div className="mx-auto px-4 container">
        {/* Título */}
        <div className="flex flex-row justify-center md:justify-between items-center mb-8">
          <h2 className="font-light font-montserrat text-[#E5202D] text-3xl text-center md:text-4xl">
            Nuestras Marcas Destacadas
          </h2>
        </div>

        {/* Botón Ir a Productos */}
        <div className="flex justify-center md:justify-end mb-6">
          <Link href="/Products">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#E5202D",
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#2D3688] hover:bg-[#E5202D] px-6 py-3 rounded-full text-white transition-all cursor-pointer"
            >
              Ir a Productos
            </motion.button>
          </Link>
        </div>

        {/* Marcas Destacadas */}
        <div className="items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            "/assets/logos/marcaDestacada_PARKER.png",
            "/assets/logos/marcaDestacada_ATOS.png",
            "/assets/logos/marcaDestacada_REXROTH.png",
          ].map((item, key) => (
            <div key={key} className="flex justify-center">
              <Image
                src={item}
                alt="ImageBrand"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Sección Adicional */}
        <div className="mt-8">
          <DistributeBrandsHomeSection />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
