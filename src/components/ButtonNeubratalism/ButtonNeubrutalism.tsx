import Link from "next/link";
import React from "react";

interface ButtonNeubrutalismProps {
  children: React.ReactNode;
  textColor: string;
  colorHover: string;
  url: string
}

const ButtonNeubrutalism: React.FC<ButtonNeubrutalismProps> = ({
  children,
  textColor,
  colorHover,
  url,
  ...rest
}) => {
  const borderColor = colorHover === "white" ? "bg-indigo-300" : "bg-red-500";
  const textClass = textColor === "white" ? "text-white" : "text-red-500";

  return (
    <Link href={url} >
      <button
        {...rest}
        className={`relative px-4 py-6 font-bold text-xl transition-colors duration-400 group ${textClass}`}
      >
        <span>{children}</span>
        {/* Border Animations */}
        <span
          className={`absolute ${borderColor} group-hover:w-full top-0 left-0 w-0 h-[2px] transition-all`}
        />
        <span
          className={`absolute ${borderColor} group-hover:h-full top-0 right-0 w-[2px] h-0 transition-all`}
        />
        <span
          className={`absolute ${borderColor} group-hover:w-full right-0 bottom-0 w-0 h-[2px] transition-all`}
        />
        <span
          className={`absolute ${borderColor} group-hover:h-full bottom-0 left-0 w-[2px] h-0 transition-all`}
        />
      </button>
    </Link>
  );
};

export default ButtonNeubrutalism;
