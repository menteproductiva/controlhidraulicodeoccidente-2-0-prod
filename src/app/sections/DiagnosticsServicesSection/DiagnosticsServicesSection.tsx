import React from 'react'
import { motion } from 'framer-motion'

const DiagnosticsServicesSection = () => {
    const diagnosticSteps = [
        { icon: '🔍', title: 'Inspection', description: 'Thorough visual and physical inspection of the system' },
        { icon: '📊', title: 'Analysis', description: 'In-depth analysis of system performance and efficiency' },
        { icon: '🛠️', title: 'Testing', description: 'Comprehensive testing of individual components and overall system' },
        { icon: '📝', title: 'Reporting', description: 'Detailed report with findings and recommendations' },
      ]
    
      return (
        <section className="bg-gray-100 py-16 text-black">
          <div className="mx-auto px-4 container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-light font-montserrat text-3xl text-center"
            >
              Hydraulic System Diagnostics
            </motion.h2>
            <p className="mb-8 text-center">
              Our diagnostic services help prevent system failures and optimize performance. Here's our process:
            </p>
            <div className="gap-8 grid md:grid-cols-4">
              {diagnosticSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg p-6 rounded-lg text-center"
                >
                  <div className="mb-4 text-4xl">{step.icon}</div>
                  <h3 className="mb-2 font-light font-montserrat text-xl">{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
}

export default DiagnosticsServicesSection