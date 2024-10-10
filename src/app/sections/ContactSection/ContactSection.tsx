import { Mail, Phone, PinMap } from "@/components/Icons/Icons";
import React from "react";

const ContactSection = () => {
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
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />
              <input
                type="text"
                placeholder="Empresa o compañía"
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              />

              {/* Motivo de Contacto - Campo Opcional */}
              <select
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                aria-label="Motivo de contacto (opcional)"
              >
                <option value="">Motivo de contacto (opcional)</option>
                <option value="consulta-general">Consulta General</option>
                <option value="cotizacion">Cotización</option>
                <option value="soporte-tecnico">Soporte técnico</option>
                <option value="asesoria-proyectos">Asesoría en proyectos</option>
                <option value="reparacion">Reparación</option>
                <option value="compra">Compra</option>
                <option value="otros">Otros</option>
              </select>

              <textarea
                placeholder="Mensaje"
                rows={4}
                className="bg-white p-3 border rounded-lg w-full text-gray-800"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#E5202D] hover:bg-[#C41D27] px-6 py-3 rounded-full w-full font-bold text-white transition duration-300"
              >
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
                  <PinMap className="mr-2 w-8 h-8" /> Av. Ejemplo 123,
                  Guadalajara, Jalisco
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 w-8 h-8" /> +52 (33) 1234-5678
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 w-8 h-8" /> info@controlhidraulico.com
                </p>
              </div>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <iframe
                className="border-none w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
