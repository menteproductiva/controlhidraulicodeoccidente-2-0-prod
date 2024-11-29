"use client"
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from 'next/link';

const options = [
  {
    title: "Inicio",
    href: "/"
  },
  {
    title: "Contacto",
    href: "/Contact"
  },
  {
    title: "Soporte Técnico",
    href: "/TechnicalSupport"
  },
  {
    title: "Nosotros",
    href: "/AboutUs"
  },
  {
    title: "Productos",
    href: "/Products"
  },
  {
    title: "Servicios",
    href: "/Services"
  }
]



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();



  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300  ease-out lg:px-12
      ${
        scrolled
          ? "bg-[#2D3688] py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="flex justify-between items-center mx-auto max-w-7xl align-middle">
        <Logo />
        <div className="lg:flex gap-6 hidden">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2 h-16">
      <Link href="/" className='flex flex-col justify-center items-center h-16'>
        <Image fetchPriority='high' priority={true}  alt='Logo' className='w-full h-14'  src="/assets/logo_3controlHidraulico.png" width={150} height={500}/>
      </Link>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="-right-2 -bottom-2 -left-2 absolute bg-indigo-300 rounded-full h-1 origin-left transition-transform duration-300 ease-out scale-x-0"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="top-12 left-1/2 absolute bg-white text-black"
          >
            <div className="-top-6 right-0 left-0 absolute bg-transparent h-6" />
            <div className="top-0 left-1/2 absolute bg-white w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/TechnicalSupport" className="flex items-center gap-2 border-2 border-white hover:bg-white px-4 py-2 rounded-lg font-semibold text-white hover:text-black transition-colors">
        <span>SOPORTE TÉCNICO</span>
      </Link>
      <Link href="Contact" className="border-2 border-indigo-300 hover:border-indigo-600 bg-indigo-300 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold text-black hover:text-white transition-colors">
        CONTACTO
      </Link>
    </div>
  );
};


const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex justify-between items-center border-neutral-300 py-6 border-b w-full font-semibold text-2xl text-start cursor-pointer"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href={href}
          className="flex justify-between items-center border-neutral-300 py-6 border-b w-full font-semibold text-2xl text-start cursor-pointer"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};


const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="top-0 left-0 fixed flex flex-col bg-white w-full h-screen"
          >
            <div className="flex justify-between items-center p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="bg-neutral-100 p-6 h-screen overflow-y-scroll">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const LINKS = [
  {
    text: "NOSOTROS",
    href: "/AboutUs",
  },
  {
    text: "PRODUCTOS",
    href: "/Products",
  },
  {
    text: "SERVICIOS",
    href: "/Services",
  },
];


export default Header
