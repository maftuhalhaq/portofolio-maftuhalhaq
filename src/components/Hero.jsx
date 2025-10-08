import React from "react";
import MafftuhImage from "../assets/maftuh.png";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-50 rounded-3xl p-6 md:p-12 mx-auto max-w-7xl my-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Bagian Kiri: Teks Konten */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            I'm Maftuh
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            An Information Systems student specializing in creating dynamic and
            user-friendly web applications with the React ecosystem.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
            <span className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              Software Development
            </span>
            <span className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              Product Development
            </span>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-center md:justify-start gap-4">
            {/* Tombol Contact Me diubah menjadi <a> dengan mailto: */}
            <a
              href="mailto:maftuhalhaq@gmail.com" // <-- GANTI DENGAN EMAIL ANDA
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>

            {/* Tombol View Projects diubah menjadi <a> dengan href="#projects" */}
            <a
              href="#projects"
              className="bg-white text-blue-600 border border-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Bagian Kanan: Gambar Profil */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-12 md:mt-0">
          <div
            className="w-full max-w-xs md:max-w-sm lg:max-w-md 
                        relative overflow-hidden rounded-3xl 
                        aspect-[4/5]
                        flex items-center justify-center"
          >
            <img
              src={MafftuhImage}
              alt="Maftuh Alhaq"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
