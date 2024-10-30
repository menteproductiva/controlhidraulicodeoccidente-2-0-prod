import Link from "next/link";

const GradientShadowButton = ({children}: {children: string}) => {
    return (
      <div className="relative w-fit transition-transform duration-300 group active:scale-95">
        <Link href="https://empaquesyconexionescha.com/" target="_blank" >
        <button className="group-hover:scale-110 relative z-10 bg-gradient-to-br from-[#F3989E] to-[#9EA3C8] p-0.5 rounded-lg duration-300">
          <span className="group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80 block bg-[#191E4B] px-4 py-2 rounded-md font-semibold text-slate-100 duration-300">
            {children}
          </span>
        </button>
        <span className="z-0 absolute -inset-4 bg-gradient-to-br from-[#E5202D] to-[#2D3688] opacity-30 group-hover:opacity-90 group-active:opacity-50 blur-xl rounded-2xl transform-gpu transition-all duration-300 pointer-events-none" />
        </Link>
      </div>
    );
  };

  
  export default GradientShadowButton;