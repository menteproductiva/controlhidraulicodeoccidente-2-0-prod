"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactSection from '../sections/ContactSection/ContactSection';
import CallToActionAboutUs from '../sections/CallToActionAboutUs/CallToActionAboutUs';
// import { ChevronDown, Download, WhatsApp } from 'lucide-react'

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<{}>();
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    category: number;
    price: number;
    inStock: boolean;
  } | null>(null);  const [activeTab, setActiveTab] = useState('industry')

  const categories = [
    { id: 1, name: 'Filtros Hidráulicos', icon: '/icons/filter.svg' },
    { id: 2, name: 'Bombas Hidráulicas', icon: '/icons/pump.svg' },
    { id: 3, name: 'Intercambiadores de Calor', icon: '/icons/heat-exchanger.svg' },
    { id: 4, name: 'Válvulas', icon: '/icons/valve.svg' },
  ]

  const products = [
    { id: 1, name: 'Hydraulic Filter XYZ', category: 1, price: 299.99, inStock: true },
    { id: 2, name: 'High-Pressure Pump ABC', category: 2, price: 599.99, inStock: false },
    { id: 3, name: 'Plate Heat Exchanger 123', category: 3, price: 899.99, inStock: true },
    { id: 4, name: 'Control Valve DEF', category: 4, price: 449.99, inStock: true },
  ]

  const industries = ['Construction', 'Mining', 'Automotive', 'Agriculture', 'Manufacturing', 'Energy', 'Aerospace', 'Naval', 'Food', 'Others']
  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D']

  return (
    <div className="bg-white min-h-screen text-black">
    
      {/* Product Categories */}
      <section className="px-4 md:px-8 lg:px-16 py-20">
        <h2 className="mb-8 font-light text-3xl text-center md:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Product Categories
        </h2>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg p-6 rounded-lg cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <Image src={category.icon} alt={category.name} width={64} height={64} className="mx-auto mb-4" />
              <h3 className="font-light text-center text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Catalog */}
      <section className="bg-gray-100 px-4 md:px-8 lg:px-16 py-12">
        <h2 className="mb-8 font-light text-3xl text-center md:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Product Catalog
        </h2>
        <div className="flex md:flex-row flex-col gap-8">
          {/* Filters */}
          <div className="md:w-1/4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex mb-4">
                {['industry', 'brand', 'model'].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-2 px-4 text-center ${activeTab === tab ? 'bg-[#2D3688] text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              {activeTab === 'industry' && (
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <input type="checkbox" id={`industry-${industry.toLowerCase()}`} className="rounded" />
                      <label htmlFor={`industry-${industry.toLowerCase()}`}>{industry}</label>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'brand' && (
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <input type="checkbox" id={`brand-${brand.toLowerCase().replace(' ', '-')}`} className="rounded" />
                      <label htmlFor={`brand-${brand.toLowerCase().replace(' ', '-')}`}>{brand}</label>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'model' && (
                <input type="text" placeholder="Search by model number" className="p-2 border rounded w-full" />
              )}
            </div>
          </div>

          {/* Product List */}
          <div className="md:w-3/4">
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((product) => !selectedCategory || product.category === selectedCategory)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white shadow-lg p-6 rounded-lg cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Image src={`/placeholder.svg?height=200&width=200`} alt={product.name} width={200} height={200} className="mx-auto mb-4" />
                    <h3 className="mb-2 font-light text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="mb-2 font-semibold text-lg" style={{ fontFamily: 'Verdana, sans-serif' }}>
                      ${product.price.toFixed(2)}
                    </p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-sm font-semibold ${product.inStock ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="mb-4 font-light text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {selectedProduct.name}
            </h2>
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <Image src={`/placeholder.svg?height=400&width=400`} alt={selectedProduct.name} width={400} height={400} className="rounded-lg" />
              </div>
              <div>
                <p className="mb-4 text-lg" style={{ fontFamily: 'Verdana, sans-serif' }}>
                  Technical Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <table className="mb-4 w-full">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Dimensions:</td>
                      <td>10" x 5" x 3"</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Weight:</td>
                      <td>2.5 lbs</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Power:</td>
                      <td>120V / 60Hz</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-4 font-semibold text-lg" style={{ fontFamily: 'Verdana, sans-serif' }}>
                  Price: ${selectedProduct.price.toFixed(2)}
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

      {/* Call to Action */}
      <section className="bg-white px-4 md:px-8 lg:px-16 py-12 text-black">
        <h2 className="mb-8 font-light text-3xl text-center md:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          How to Purchase
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {['Select Product', 'Request Quote', 'Get Confirmation', 'Receive Product'].map((step, index) => (
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
              <p className="text-center text-lg" style={{ fontFamily: 'Verdana, sans-serif' }}>
                {step}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#E5202D' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white px-8 py-3 rounded-full font-semibold text-[#2D3688] text-lg"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Contact Us for More Information
          </motion.button>
        </div>
      </section>
      <CallToActionAboutUs/>
      <ContactSection/>
    </div>
  )
}