interface ButtonProps {
  children: string;
}

export const HoverButton = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#F2FFBD] px-8 py-4 rounded-xl font-semibold">
      <div className="relative overflow-hidden">
        <p className="text-[#022D42]">{children}</p>
        <p aria-hidden className="top-0 left-0 absolute text-[#F2FFBD]">
          {children}
        </p>
      </div>
    </button>
  );
};