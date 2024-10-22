import React from 'react';
import { IconType } from 'react-icons';
import { FaWhatsapp } from "react-icons/fa";


interface CardType {
  title: string;
  titleDescription: string;
  subtitle: string;
  time: string;
  Icon: IconType;
  href: string;
}

const HoverDevCards = ({ title, titleDescription,subtitle, time, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="relative border-[1px] border-slate-300 bg-white shadow-lg p-6 rounded-lg w-full transition-transform overflow-hidden group hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-blue-500 transition-transform translate-y-[100%] group-hover:translate-y-[0%] duration-300" />

      <Icon className="group-hover:text-slate-100 group-hover:rotate-12 -top-12 -right-12 z-10 absolute text-9xl text-slate-100 transition-transform duration-300" />
      <Icon className="group-hover:text-white relative z-10 mb-4 text-[#E5202D] text-4xl transition-colors duration-300" />
      <h3 className="group-hover:text-white relative z-10 font-semibold text-[#2D3688] text-lg duration-300">
        {title}
      </h3>
      <p className="group-hover:text-white relative z-10 mb-2 text-slate-500 text-sm duration-300">
        {subtitle}
      </p>
      <p className='group-hover:text-black relative z-10 font-semibold text-black text-xs duration-300'>{titleDescription}</p>
      <p className="group-hover:text-white relative z-10 text-slate-400 text-xs duration-300">
        {time}
      </p>
      <button className="relative z-10 flex flex-row items-center bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors">
        <FaWhatsapp className='mr-2'/>
        Solicitar Cotización
      </button>
    </a>
  );
};

export default HoverDevCards;
