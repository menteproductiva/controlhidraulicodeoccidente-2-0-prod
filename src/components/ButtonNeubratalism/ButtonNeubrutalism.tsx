import React from "react";

interface ButtonNeubrutalismProps {
  children: React.ReactNode;
  textColor: string;
  colorHover: string;
}

const ButtonNeubrutalism: React.FC<ButtonNeubrutalismProps> = ({
  children,
  textColor,
  colorHover,
  ...rest
}) => {
    const borderColor = colorHover === 'white' ? 'bg-indigo-300' : 'bg-red-500';

  return (
    <button
      {...rest}
      className={`
        relative px-4 py-6 font-bold text-xl transition-colors duration-[400ms] group
        ${textColor === "white" ? "text-white" : "text-red-500"}`}
    >
      <span>{children}</span>
      {/* TOP */}
      <span
        className={`group-hover:w-full top-0 left-0 absolute ${borderColor} w-0 h-[2px] transition-all duration-100`}
      />
      {/* RIGHT */}
      <span
        className={`group-hover:h-full top-0 right-0 absolute ${borderColor} w-[2px] h-0 transition-all duration-100 delay-100`}
      />
      {/* BOTTOM */}
      <span
        className={`group-hover:w-full right-0 bottom-0 absolute ${borderColor} w-0 h-[2px] transition-all duration-100 delay-200`}
      />
      {/* LEFT */}
      <span
        className={`group-hover:h-full bottom-0 left-0 absolute ${borderColor} w-[2px] h-0 transition-all duration-100 delay-300`}
      />
    </button>
  );
};

export default ButtonNeubrutalism;