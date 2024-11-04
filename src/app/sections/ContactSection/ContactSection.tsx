"use client";
import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

interface TypeData {
  Nombre: string;
  Correo: string;
  Telefono: string;
  Empresa: string;
  Motivo: string;
  Mensaje: string;
}

const ContactSection = () => {
  const [infoSubmit, setInfoSubmit] = useState<TypeData>({
    Nombre: "",
    Correo: "",
    Telefono: "",
    Empresa: "",
    Motivo: "",
    Mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setInfoSubmit({
      ...infoSubmit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoSubmit),
      });

      const data = await response.json();


      if (response.ok) {
        console.log("Mensaje enviado correctamente");
        setInfoSubmit({
          Nombre: "",
          Correo: "",
          Telefono: "",
          Empresa: "",
          Motivo: "",
          Mensaje: "",
        });
      } else {
        console.log("Error al enviar el mensaje");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-[#2D3688] to-[#1A2056] py-16 md:py-24 text-white"
    >
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-light font-montserrat text-3xl text-center md:text-4xl">
          Contáctenos
        </h2>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Nombre"
                value={infoSubmit.Nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="email"
                name="Correo"
                value={infoSubmit.Correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="tel"
                name="Telefono"
                value={infoSubmit.Telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="text"
                name="Empresa"
                value={infoSubmit.Empresa}
                onChange={handleChange}
                placeholder="Empresa o compañía"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />

              <select
                name="Motivo"
                value={infoSubmit.Motivo} // Añadir motivo si lo necesitas
                onChange={handleChange}
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                aria-label="Motivo de contacto (opcional)"
              >
                <option value="">Motivo de contacto (opcional)</option>
                <option value="consulta-general">Consulta General</option>
                <option value="cotizacion">Cotización</option>
                <option value="soporte-tecnico">Soporte técnico</option>
                <option value="asesoria-proyectos">
                  Asesoría en proyectos
                </option>
                <option value="reparacion">Reparación</option>
                <option value="compra">Compra</option>
                <option value="otros">Otros</option>
              </select>

              <textarea
                name="Mensaje"
                value={infoSubmit.Mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={4}
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              ></textarea>
              <button className="bg-[#E5202D] hover:bg-[#C41D27] px-6 py-3 rounded-full w-full font-bold text-white transition duration-300">
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className="space-y-6 md:w-1/2">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="mb-4 font-light font-montserrat text-xl">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FiMapPin className="mr-2 w-8 h-8 text-white" />
                  Av. Cristóbal Colón 1022,Moderna 44190 Guadalajara, Jalisco
                </p>
                <p className="flex items-center">
                  <MdOutlineLocalPhone className="mr-2 w-8 h-8" />
                  1203 1611 / 12031612
                </p>
                <p className="flex items-center">
                  <IoMailOutline className="mr-2 w-8 h-8" />{" "}
                  ventascontrolhidraulico473@gmail.com
                </p>
              </div>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <iframe
                title="ubication-hidraulica"
                className="border-none w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4919.048913003148!2d-103.35655841441127!3d20.660391683368314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2010dae4e8b%3A0xe0fef6d4bba04971!2sAv.%20Crist%C3%B3bal%20Col%C3%B3n%201022%2C%20Moderna%2C%2044190%20Guadalajara%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1730389408223!5m2!1ses-419!2sus"
                width="600"
                height="450"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
