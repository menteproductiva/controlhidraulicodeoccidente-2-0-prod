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
  const [selectedCategory, setSelectedCategory] = useState<{}>();
  const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(
    null
  );
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

  const filteredProducts = products.filter((product) => {
    if (activeTab === "Nombre" && searchTerm) {
      return product.Nombre.toLowerCase().includes(searchTerm.toLowerCase());
    }
    if (selectedCategory) {
      return product.Categoria === selectedCategory;
    }
    return true;
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
                            .map((category, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <input type="checkbox" className="rounded" />
                                <label>Cargando...</label>
                              </div>
                            ))
                        : categories.map((industry, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="checkbox"
                                id={`industry-${industry.Nombre.toLowerCase()}`}
                                className="rounded"
                              />
                              <label
                                htmlFor={`industry-${industry.Nombre.toLowerCase()}`}
                              >
                                {industry.Nombre}
                              </label>
                            </div>
                          ))}
                    </div>
                  )}
                  {activeTab === "Marca" && (
                    <div className="space-y-2">
                      {loading
                        ? Array(15)
                            .fill(0)
                            .map((category, index) => (
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
                                id={`brand-${brand.Nombre.toLowerCase().replace(
                                  " ",
                                  "-"
                                )}`}
                                className="rounded"
                              />
                              <label
                                htmlFor={`brand-${brand.Nombre.toLowerCase().replace(
                                  " ",
                                  "-"
                                )}`}
                              >
                                {brand.Nombre}
                              </label>
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
                        .map((category, index) => (
                          <div
                            key={index}
                            className="bg-white shadow-lg p-4 rounded-lg animate-pulse cursor-pointer"
                          >
                            {/* Imagen del producto */}
                            <div className="mx-auto mb-4"></div>

                            {/* Marca y nombre del producto */}
                            <p className="mb-1 text-purple-500 text-sm"></p>
                            <h3 className="mb-2 font-bold text-gray-900 text-xl"></h3>
                            <div className="mb-4 font-semibold text-green-500 text-sm">
                              ----
                            </div>
                            <a
                              href={`https://wa.me/1234567890`}
                              className="block bg-green-500 hover:bg-green-600 py-2 rounded-lg w-full font-bold text-center text-white transition-colors"
                            >
                              <div className="flex justify-center items-center">
                                <span className="mr-2">---</span>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="block mt-4 font-bold text-blue-600 text-center hover:underline"
                            >
                              ----
                            </a>
                          </div>
                        ))
                    : filteredProducts
                        // .filter(
                        //   (product) =>
                        //     !selectedCategory ||
                        //     product.Categoria === selectedCategory
                        // )
                        .map((product, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white shadow-lg p-4 rounded-lg cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                          >
                            {/* Imagen del producto */}
                            <Image
                              src={`${product.Imagen}`} // Reemplaza con la URL de la imagen del producto
                              alt={product.Nombre}
                              width={200}
                              height={200}
                              className="mx-auto mb-4"
                            />

                            {/* Marca y nombre del producto */}
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
                              href={`https://wa.me/1234567890`} // Reemplaza con el número de WhatsApp
                              className="block bg-green-500 hover:bg-green-600 py-2 rounded-lg w-full font-bold text-center text-white transition-colors"
                            >
                              <div className="flex justify-center items-center">
                                <span className="mr-2">COTIZAR</span>
                                <FaWhatsapp />
                              </div>
                            </a>
                            <a
                              href="#"
                              className="block mt-4 font-bold text-blue-600 text-center hover:underline"
                            >
                              VER DETALLE
                            </a>
                          </motion.div>
                        ))}
                </div>
              </div>
            </div>
          </section>
        </TextParallaxContent>
      </div>

      {/* Product Sheet Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <h2
              className="mb-4 font-light text-2xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {selectedProduct.Nombre}
            </h2>
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <Image
                  src={`${selectedProduct.Imagen}`}
                  alt={selectedProduct.Nombre}
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p
                  className="mb-4 text-lg"
                  style={{ fontFamily: "Verdana, sans-serif" }}
                >
                  Technical Description: {selectedProduct.Descripcion}
                </p>
                <table className="mb-4 w-full">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Dimensions:</td>
                      <td>{selectedProduct.Dimensiones}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Weight:</td>
                      <td>{selectedProduct.Peso}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Power:</td>
                      <td>120V / 60Hz</td>
                    </tr>
                  </tbody>
                </table>
                <p
                  className="mb-4 font-semibold text-lg"
                  style={{ fontFamily: "Verdana, sans-serif" }}
                >
                  Price: ${selectedProduct.Precio.toFixed(2)}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-[#2D3688] mb-4 px-4 py-2 rounded-full text-white cursor-pointer"
                >
                  {/* <Download className="mr-2" /> */}
                  Download Technical Sheet
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E5202D] mb-4 px-6 py-3 rounded-full w-full font-semibold text-lg text-white"
                >
                  Request a Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center bg-green-500 px-6 py-3 rounded-full w-full font-semibold text-lg text-white"
                >
                  {/* <WhatsApp className="mr-2" /> */}
                  Contact via WhatsApp
                </motion.button>
              </div>
            </div>
            <button
              className="top-4 right-4 absolute text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}

      <section className="bg-white px-4 md:px-8 lg:px-16 py-12 text-black">
        <h2
          className="mb-8 font-light text-3xl text-center md:text-4xl"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Como comprar
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[
            "Seleccionar producto",
            "Cotizar por Whatsapp",
            "Conversamos sobre lo que se requiere",
            "Envío de cotización",
            "Confirmación de envío",
            "Recepción y/o entrega del producto",
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center items-center bg-[#2D3688] mb-2 rounded-full w-16 h-16 font-bold text-2xl text-white">
                {index + 1}
              </div>
              <p
                className="text-center text-lg"
                style={{ fontFamily: "Verdana, sans-serif" }}
              >
                {step}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#E5202D" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white px-8 py-3 rounded-full font-semibold text-[#2D3688] text-lg"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            Contact Us for More Information
          </motion.button>
        </div>
      </section>
      <CallToActionAboutUs />
      <ContactSection />
    </div>
  );
}
