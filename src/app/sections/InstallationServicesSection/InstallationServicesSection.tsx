import React from 'react'
import { motion } from 'framer-motion'


const InstallationServicesSection = () => {
    return (
        <section className="bg-[#2D3688] py-16 text-black">
          <div className="mx-auto px-4 container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-light font-montserrat text-3xl text-center"
            >
              Installation & Maintenance
            </motion.h2>
            <div className="gap-8 grid md:grid-cols-3">
              {['Installation', 'Preventive Maintenance', 'Corrective Maintenance'].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white shadow-lg p-6 rounded-lg"
                >
                  <h3 className="mb-4 font-light font-montserrat text-xl">{service}</h3>
                  <p className="mb-4">Professional {service.toLowerCase()} services for your hydraulic systems.</p>
                  <p className="mb-4">Estimated time: 2-5 days</p>
                  <p className="mb-6">Cost range: $1,000 - $5,000</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#E5202D] hover:bg-[#2D3688] px-6 py-2 rounded-full font-bold text-white transition duration-300 ease-in-out"
                  >
                    Request Maintenance
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
}

export default InstallationServicesSection