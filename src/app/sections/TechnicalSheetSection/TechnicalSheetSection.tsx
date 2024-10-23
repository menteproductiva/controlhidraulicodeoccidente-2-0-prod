"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { File } from "@/components/Icons/Icons";

interface CategoriesType {
  Nombre: string;
}

interface ManualsType {
  id_page: string;
  PDF: string;
  Rollup: string;
  Descripcion: string;
  Nombre: string;
}

const TechnicalSheetSection = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [manuals, setManuals] = useState<ManualsType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response_categories = await fetch("/api/categoriasManuales", {
          method: "GET",
        });

        const data_categories = await response_categories.json();

        const response_manuals = await fetch("/api/manuales", {
          method: "GET",
        });

        const data_manuals = await response_manuals.json();

        if (data_categories.response && data_manuals.response) {
          setCategories(data_categories.response);
          setManuals(data_manuals.response);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Filtrar los documentos por categoría y por el término de búsqueda
  const filteredDocuments = manuals.filter((doc) => {
    const matchesCategory =
      selectedCategory === "Todos" || doc.Rollup === selectedCategory;
    const matchesSearchTerm = doc.Nombre.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    return matchesCategory && matchesSearchTerm;
  });

  const clearFilters = () => {
    setSelectedCategory("Todos");
    setSearchTerm("");
  };

  return (
    <div className="bg-[#2D3688] mt-10 py-16 md:py-24">
      {/* Technical Documentation Section */}
      <section className="mx-auto mb-16 px-1 container">
        <div className="flex flex-row justify-between w-full">
          <h2 className="mb-6 font-light font-montserrat text-3xl text-white">
            Documentación Técnica
          </h2>
          <div className="flex flex-row justify-evenly items-center w-2/5">
            <button onClick={clearFilters} className="bg-[#E5202D] hover:bg-white p-2 rounded-lg hover:text-black">
              Limpiar Filtros
            </button>
            <input
              type="text"
              placeholder="Buscar por nombre"
              className="p-2 border rounded w-1/3 h-3/5 text-black"
              value={searchTerm} // Valor del input controlado por el estado
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el término de búsqueda
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 pb-2">
            {loading
              ? Array(15)
                  .fill(0)
                  .map((category, index) => (
                    <button
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-sm text-white md:text-base whitespace-nowrap transition-colors animate-pulse"
                    >
                      Loading
                    </button>
                  ))
              : categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                      selectedCategory === category.Nombre
                        ? "bg-[#E5202D] text-white"
                        : "bg-white text-[#2D3688] hover:bg-[#E5202D] hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category.Nombre)}
                  >
                    {category.Nombre}
                  </button>
                ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array(12)
                .fill(0)
                .map((category, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg animate-pulse overflow-hidden"
                  >
                    Loading
                    <div className="p-6 animate-pulse">------</div>
                    <div className="bg-gray-50 px-6 py-3 animate-pulse">
                      --------
                    </div>
                  </div>
                ))
            : filteredDocuments.map((doc: any, index: any) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <File className="mb-4 w-8 h-8 text-[#E5202D]" size={32} />
                    <h3 className="mb-2 font-bold font-verdana text-[#000000] text-lg">
                      {doc.Nombre}
                    </h3>
                    <p className="mb-4 font-verdana text-gray-600">
                      {doc.Descripcion}
                    </p>
                    <p className="font-verdana text-[#2D3688] text-sm">
                      {doc.Rollup}
                    </p>
                  </div>
                  <div className="bg-gray-50 px-6 py-3">
                    <a
                      href={doc.PDF} // Enlace al PDF
                      className="font-bold text-[#E5202D] hover:underline"
                      target="_blank" // Abrir el PDF en una nueva pestaña
                      rel="noopener noreferrer"
                    >
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
