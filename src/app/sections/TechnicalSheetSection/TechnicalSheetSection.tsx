"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { File } from "@/components/Icons/Icons";

const categories = [
  "Todos",
  "Filtros Hidráulicos",
  "Bombas Hidráulicas",
  "Intercambiadores de Calor",
  "Motores Hidráulicos",
  "Accesorios",
  "Cilindros Hidráulicos",
  "Válvulas Hidráulicas",
  "Acumuladores Hidráulicos",
  "Unidades de Potencia Hidráulica",
];

const technicalDocuments = [
  {
    id: 1,
    title: "Manual de Bomba Hidráulica",
    description: "Guía detallada para la Serie de Bombas XYZ",
    icon: "pdf",
    category: "Bombas Hidráulicas",
  },
  {
    id: 2,
    title: "Especificaciones de Válvulas",
    description: "Especificaciones técnicas para la Gama de Válvulas ABC",
    icon: "pdf",
    category: "Válvulas Hidráulicas",
  },
  {
    id: 3,
    title: "Programa de Mantenimiento",
    description: "Mantenimiento recomendado para todos los equipos",
    icon: "pdf",
    category: "Accesorios",
  },
  {
    id: 4,
    title: "Guía de Instalación de Filtros",
    description: "Instrucciones paso a paso para la instalación de filtros",
    icon: "pdf",
    category: "Filtros Hidráulicos",
  },
  {
    id: 5,
    title: "Manual de Operación de Motores",
    description: "Guía completa para la operación de motores hidráulicos",
    icon: "pdf",
    category: "Motores Hidráulicos",
  },
  {
    id: 6,
    title: "Catálogo de Cilindros",
    description: "Catálogo completo de cilindros hidráulicos",
    icon: "pdf",
    category: "Cilindros Hidráulicos",
  },
];

const TechnicalSheetSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const filteredDocuments =
    selectedCategory === "Todos"
      ? technicalDocuments
      : technicalDocuments.filter((doc) => doc.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-[#2D3688] to-[#1A2056] mt-10 py-16 md:py-24">
      {/* Categories Tabs */}

      {/* Technical Documentation Section */}
      <section className="mx-auto mb-16 px-4 container">
        <h2 className="mb-6 font-light font-montserrat text-3xl text-white">
          Documentación Técnica
        </h2>
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-[#E5202D] text-white"
                    : "bg-white text-[#2D3688] hover:bg-[#E5202D] hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <File className="mb-4 w-8 h-8 text-[#E5202D]" size={32} />
                <h3 className="mb-2 font-bold font-verdana text-[#000000] text-lg">
                  {doc.title}
                </h3>
                <p className="mb-4 font-verdana text-gray-600">
                  {doc.description}
                </p>
                <p className="font-verdana text-[#2D3688] text-sm">
                  {doc.category}
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3">
                <a href="#" className="font-bold text-[#E5202D] hover:underline">
                  Descargar PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalSheetSection;
