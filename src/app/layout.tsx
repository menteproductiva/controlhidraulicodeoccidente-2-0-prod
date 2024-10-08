import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Control Hidráulico de Occidente S.A. de C.V.",
  description: "Líder en venta, reparación y mantenimiento de equipos hidráulicos. Soluciones de oleohidráulica para empresas industriales en Guadalajara.",
  keywords: [
    "equipos hidráulicos", 
    "oleohidráulica", 
    "reparación hidráulica", 
    "mantenimiento de equipos", 
    "soluciones hidráulicas", 
    "Guadalajara", 
    "ingeniería hidráulica"
  ],
  authors: [{ name: "Control Hidráulico de Occidente Team" }],
  openGraph: {
    title: "Control Hidráulico de Occidente S.A. de C.V.",
    description: "Soluciones en oleohidráulica, venta y reparación de equipos hidráulicos con más de 38 años de experiencia.",
    url: "https://www.controlhidraulicodeoccidente.com",
    images: [
      {
        url: "URL_de_la_imagen_destacada", // Cambia por la URL real de la imagen
        width: 1200,
        height: 630,
        alt: "Imagen destacada de Control Hidráulico de Occidente",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Control Hidráulico de Occidente S.A. de C.V.",
  //   description: "Expertos en oleohidráulica y soluciones hidráulicas industriales con sede en Guadalajara.",
  //   images: ["URL_de_la_imagen_destacada"], // Cambia por la URL real de la imagen
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    
    </html>
  );
}
