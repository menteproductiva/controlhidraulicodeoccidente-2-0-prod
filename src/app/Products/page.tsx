"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from "../sections/ContactSection/ContactSection";
import CallToActionAboutUs from "../sections/CallToActionAboutUs/CallToActionAboutUs";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";
import { FaWhatsapp } from "react-icons/fa";

interface CategoriesType {
  Nombre: string;
}

interface BrandsType {
  Nombre: string;
}

interface ProductsType {
  id_page: string;
  Descripcion: string;
  Marca: string;
  Dimensiones: string;
  Categoria: string;
  Peso: number;
  Precio: number;
  Imagen: string;
  Nombre: string;
}

export default function Page() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(null);
  const [activeTab, setActiveTab] = useState("Categoría");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [brands, setBrands] = useState<BrandsType[]>([]);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response_categories = await fetch("/api/categoriasProductos");
        const data_categories = await response_categories.json();

        const response_brands = await fetch("/api/marca");
        const data_brands = await response_brands.json();

        const response_products = await fetch("/api/productos");
        const data_products = await response_products.json();

        if (
          data_products.response &&
          data_brands.response &&
          data_categories.response
        ) {
          setCategories(data_categories.response);
          setBrands(data_brands.response);
          setProducts(data_products.response);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((br) => br !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm
      ? product.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesCategory = selectedCategories.length
      ? selectedCategories.includes(product.Categoria)
      : true;
    const matchesBrand = selectedBrands.length
      ? selectedBrands.includes(product.Marca)
      : true;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/assets/imgAbout_Header.jpg"
          heading="Productos Hidráulicos"
          subheading="Para Optimizar tus Operaciones Industriales"
        >
          <section className="bg-gray-100 px-4 md:px-8 lg:px-16 py-12">
            <h2 className="mb-8 font-light text-3xl text-center md:text-4xl">
              Motores Hidráulicos
            </h2>
            <div className="flex md:flex-row flex-col gap-8">
              {/* Filters */}
              <div className="md:w-1/4">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <div className="flex mb-4">
                    {["Categoría", "Marca", "Nombre"].map((tab) => (
                      <button
                        key={tab}
                        className={`flex-1 py-2 px-4 text-center ${
                          activeTab === tab
                            ? "bg-[#2D3688] text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                  {activeTab === "Categoría" && (
                    <div className="space-y-2">
                      {loading
                        ? Array(8)
                            .fill(0)
                            .map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <input type="checkbox" className="rounded" />
                                <label>Cargando...</label>
                              </div>
                            ))
                        : categories.map((category, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.Nombre)}
                                onChange={() => handleCategoryChange(category.Nombre)}
                                className="rounded"
                              />
                              <label>{category.Nombre}</label>
                            </div>
                          ))}
                    </div>
                  )}
                  {activeTab === "Marca" && (
                    <div className="space-y-2">
                      {loading
                        ? Array(15)
                            .fill(0)
                            .map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <input type="checkbox" className="rounded" />
                                <label>Cargando</label>
                              </div>
                            ))
                        : brands.map((brand, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand.Nombre)}
                                onChange={() => handleBrandChange(brand.Nombre)}
                                className="rounded"
                              />
                              <label>{brand.Nombre}</label>
                            </div>
                          ))}
                    </div>
                  )}
                  {activeTab === "Nombre" && (
                    <input
                      type="text"
                      placeholder="Buscar por nombre"
                      className="p-2 border rounded w-full"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  )}
                </div>
              </div>

              {/* Product List */}
              <div className="md:w-3/4">
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {loading
                    ? Array(15)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="bg-white shadow-lg p-4 rounded-lg animate-pulse cursor-pointer"
                          >
                            {/* Loading State */}
                          </div>
                        ))
                    : filteredProducts.map((product, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white shadow-lg p-4 rounded-lg cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                        >
                          {/* Product Details */}
                          <Image
                            src={`${product.Imagen}`}
                            alt={product.Nombre}
                            width={200}
                            height={200}
                            className="mx-auto mb-4"
                          />
                          <p className="mb-1 text-purple-500 text-sm">
                            {product.Marca}
                          </p>
                          <h3 className="mb-2 font-bold text-gray-900 text-xl">
                            {product.Nombre}
                          </h3>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-sm font-semibold mb-4 ${
                              product.id_page
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {product.id_page ? "In Stock" : "Out of Stock"}
                          </motion.div>
                          <a
                            href={`https://wa.me/1234567890`}
                            className="block bg-green-500 hover:bg-green-600 py-2 rounded-lg w-full font-bold text-center text-white transition-colors"
                          >
                            <div className="flex justify-center items-center">
                              <span className="mr-2">COTIZAR</span>
                              <FaWhatsapp />
                            </div>
                          </a>
                        </motion.div>
                      ))}
                </div>
              </div>
            </div>
          </section>
        </TextParallaxContent>
        <ContactSection />
        <CallToActionAboutUs />
      </div>
    </div>
  );
}
