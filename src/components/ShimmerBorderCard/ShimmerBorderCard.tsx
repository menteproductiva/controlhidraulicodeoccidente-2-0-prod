import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface CardProps {
  title: string;
  titleDescription: string;
  description: string;
  time: string;
  buttonText: string;
  href: string;
}

const ShimmerBorderCard = ({
  title,
  titleDescription,
  description,
  time,
  buttonText,
  href,
}: CardProps) => {
  return (
    <div className="relative bg-slate-800 hover:bg-slate-800/50 mx-auto p-0.5 rounded-lg w-full max-w-sm transition-all duration-500 overflow-hidden group hover:scale-[1.01]">
      <div className="group-hover:bg-slate-800 relative z-10 flex flex-col justify-center items-center bg-white p-8 rounded-[7px] transition-colors duration-500 overflow-hidden">
        <h4 className="group-hover:text-slate-50 relative z-10 mb-4 w-full font-bold text-[#2D3688] text-3xl">
          {title}
        </h4>

        <p className="group-hover:text-slate-400 relative z-10 mb-4 text-slate-500">
          {description}
        </p>
        <p className="group-hover:text-slate-400 relative z-10 mb-2 font-semibold text-black text-lg">
          {titleDescription}
        </p>
        <p className="group-hover:text-white relative z-10 text-black text-sm">
          {time}
        </p>
        <button className="relative z-10 flex flex-row items-center bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors">
          <FaWhatsapp className="mr-2" />
          Solicitar Cotización
        </button>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="z-0 absolute inset-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
};

export default ShimmerBorderCard;
