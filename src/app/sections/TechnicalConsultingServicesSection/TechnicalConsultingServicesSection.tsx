import React from 'react'
import { motion } from 'framer-motion'

const TechnicalConsultingServicesSection = () => {
    return (
        <section className="bg-[#2D3688] py-16">
          <div className="mx-auto px-4 container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-light font-montserrat text-3xl text-black text-center"
            >
              Technical Consulting
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white shadow-lg p-8 rounded-lg"
            >
              <h3 className="mb-4 font-light font-montserrat text-2xl text-black">Expert Advice for Complex Systems</h3>
              <p className="mb-6 text-black">
                Our team of experienced engineers provides expert technical consulting for hydraulic systems of all sizes and complexities. We offer:
              </p>
              <ul className="mb-6 text-black list-disc list-inside">
                <li>System optimization recommendations</li>
                <li>Troubleshooting assistance</li>
                <li>Performance analysis</li>
                <li>Custom solution design</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2D3688] hover:bg-[#E5202D] px-6 py-2 rounded-full font-bold text-white transition duration-300 ease-in-out"
              >
                Schedule a Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      )
}

export default TechnicalConsultingServicesSection