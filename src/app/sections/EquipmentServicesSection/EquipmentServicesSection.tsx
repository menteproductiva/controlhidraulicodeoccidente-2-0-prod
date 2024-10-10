import React from 'react'
import { motion } from 'framer-motion'

interface EquipmentServicesSectionProps {
    activeCard: number | null;
    setActiveCard: React.Dispatch<React.SetStateAction<number>>;
  }

  const EquipmentServicesSection: React.FC<EquipmentServicesSectionProps> = ({ activeCard, setActiveCard }) => {
    const repairItems = [
        { title: 'Pumps', description: 'Expert repair for all types of hydraulic pumps.' },
        { title: 'Cylinders', description: 'Precision repair and rebuilding of hydraulic cylinders.' },
        { title: 'Valves', description: 'Comprehensive valve repair and testing services.' },
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
              Equipment Repair Services
            </motion.h2>
            <div className="gap-8 grid md:grid-cols-3">
              {repairItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white shadow-lg p-6 rounded-lg cursor-pointer"
                  onClick={() => setActiveCard(activeCard === index ? 1 : index)}
                >
                  <h3 className="mb-4 font-light font-montserrat text-xl">{item.title}</h3>
                  <p>{item.description}</p>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeCard === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">Repair time: 3-7 days</p>
                    <p>Cost estimate: $500 - $2,000</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
}

export default EquipmentServicesSection