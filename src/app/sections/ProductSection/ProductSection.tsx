import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    name: "Bomba Hidráulica de Alta Presión",
    description: "Ideal para aplicaciones industriales exigentes.",
    src: "/assets/products/bomba.jpg",
  },
  {
    name: "Válvula de Control Proporcional",
    description: "Precisión excepcional en el control de flujo hidráulico.",
    src: "/assets/products/valvula.jpeg",
  },
  {
    name: "Cilindro Hidráulico ",
    description:
      "Diseñado para soportar cargas pesadas y uso intensivo en cadenas de suministros.",
    src: "/assets/products/cilindro.jpg",
  },
  {
    name: "Sistema de Filtración Avanzado",
    description:
      "Mantiene la pureza del fluido hidráulico para un rendimiento óptimo.",
    src: "/assets/products/sistema.jpeg",
  },
];

const ProductSection = () => {
  return (
    <section id="productos" className="bg-white py-16 md:py-24">
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
          Productos Destacados
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition duration-300"
            >
              <Image
                src={`${product.src}`}
                alt={product.name}
                width={300}
                height={200}
                className="mb-4 rounded-lg"
              />
              <h3 className="mb-2 font-light font-montserrat text-[#2D3688] text-xl">
                {product.name}
              </h3>
              <p className="mb-4 text-gray-600">{product.description}</p>
              <Link href="/Products">
                <button className="bg-[#2D3688] hover:bg-[#E5202D] px-4 py-2 rounded-full w-full text-white transition duration-300">
                  Ver Detalles
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
