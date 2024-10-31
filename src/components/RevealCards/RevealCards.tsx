import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const RevealCards = ({
  imgSrc,
  title,
  category,
  description,
}: {
  imgSrc: string;
  title: string;
  category: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative rounded-xl w-full h-[300px]"
    >
      <div className="flex flex-col justify-center bg-[#2D3688] p-6 h-1/2">
        <h3 className="mb-2 font-semibold text-lg text-white">{title}</h3>
        <p className="font-light text-slate-300 text-xs">{description}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="z-10 absolute inset-0 bg-slate-200"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          initial={{ opacity: 1 }}
          variants={{
            hover: { opacity: 0 }, // Solo oculta el texto al hacer hover
          }}
          className="bottom-4 left-[35%] z-10 absolute font-bold text-white text-xl transform -translate-x-1/2"
        >
          <p className="font-light text-sm text-white">{category}</p>
          <span className="font-bold text-base text-white">{title}</span>
        </motion.div>
      </motion.div>
      <a
         target="_blank"
         href={`https://wa.me/1234567890`}
        rel="nofollow"
        className="right-0 bottom-0 z-0 absolute place-content-center grid bg-white w-1/2 h-1/2 text-green-500 hover:text-[#2D3688] transition-colors"
      >
        <div className="flex items-center">
          <FaWhatsapp className="text-green-500 text-lg" />
          <span className="ml-3 font-semibold text-xs">COTIZAR</span>
        </div>
      </a>
    </motion.div>
  );
};

export default RevealCards;
