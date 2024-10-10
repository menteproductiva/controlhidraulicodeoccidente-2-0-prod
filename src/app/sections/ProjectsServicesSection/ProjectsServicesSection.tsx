import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const ProjectsServicesSection = () => {
    return (
        <section className="bg-gray-100 py-16 text-black">
          <div className="mx-auto px-4 container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-light font-montserrat text-3xl text-center"
            >
              Projects of Hydraulic Engineering
            </motion.h2>
            <div className="gap-8 grid md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hydraulic project example"
                  width={600}
                  height={400}
                  className="shadow-lg rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h3 className="mb-4 font-light font-montserrat text-2xl">Personalized Hydraulic Solutions</h3>
                <p className="mb-6">
                  We specialize in creating custom hydraulic solutions for large-scale projects. Our team of experts works closely with you to design and implement systems that meet your specific requirements.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2D3688] hover:bg-[#E5202D] px-6 py-2 rounded-full font-bold text-white transition duration-300 ease-in-out self-start"
                >
                  Request a Quote
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
    )
}

export default ProjectsServicesSection