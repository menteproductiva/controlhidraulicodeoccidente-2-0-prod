import { motion } from "framer-motion";
import Image from "next/image"; // O cualquier método que uses para mostrar los logos

// Configura las imágenes de los logos
const logosTop = [
  "/assets/logos/logoDistribuidor_1.png", "/assets/logos/logoDistribuidor_2.png", "/assets/logos/logoDistribuidor_3.png", "/assets/logos/logoDistribuidor_4.png", 
  "/assets/logos/logoDistribuidor_9.png", "/assets/logos/logoDistribuidor_10.png", "/assets/logos/logoDistribuidor_11.png", "/assets/logos/logoDistribuidor_12.png",
  "/assets/logos/logoDistribuidor_17.png", "/assets/logos/logoDistribuidor_18.png"
];

const logosBottom = [
  "/assets/logos/logoDistribuidor_5.png", "/assets/logos/logoDistribuidor_6.png", "/assets/logos/logoDistribuidor_7.png", "/assets/logos/logoDistribuidor_8.png", 
  "/assets/logos/logoDistribuidor_13.png", "/assets/logos/logoDistribuidor_14.png", "/assets/logos/logoDistribuidor_15.png", "/assets/logos/logoDistribuidor_16.png",
  "/assets/logos/logoDistribuidor_19.png", "/assets/logos/logoDistribuidor_20.png"
];

// Configuración de la animación continua para ambas filas
const scrollVariants = {
  animate: {
    x: ["0%", "-100%"], // Se mueve de izquierda a derecha
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Ajusta la duración para controlar la velocidad
        ease: "linear",
      },
    },
  },
};

const reverseScrollVariants = {
  animate: {
    x: ["0%", "-100%"], // Se mueve de izquierda a derecha igual que arriba, pero invertido con logos duplicados.
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Ajusta la duración para controlar la velocidad
        ease: "linear",
      },
    },
  },
};

export default function ScrollingLogos() {
  return (
    <div className="bg-gray-100 py-10 w-full overflow-hidden">
      {/* Fila superior: logos moviéndose de izquierda a derecha */}
      <motion.div
        className="flex items-center space-x-6 w-full"
        variants={scrollVariants}
        animate="animate"
      >
        {/* Duplicamos los logos para hacer el ciclo continuo */}
        {logosTop.concat(logosTop).map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 w-24 h-24">
            <Image src={logo} alt={`logo-${idx}`} width={100} height={100} />
          </div>
        ))}
      </motion.div>

      {/* Fila inferior: logos moviéndose de derecha a izquierda */}
      <motion.div
        className="flex items-center space-x-6 mt-10 w-full"
        variants={reverseScrollVariants}
        animate="animate"
      >
        {/* Duplicamos los logos para hacer el ciclo continuo */}
        {logosBottom.concat(logosBottom).map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 w-24 h-24">
            <Image src={logo} alt={`logo-${idx}`} width={100} height={100} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
