import React from "react";
// Impor ikon dari react-icons
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi"; // Menggunakan ikon email dari Heroicons

function About() {
  return (
    <section id="about" className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">
        {/* Judul "About" yang tetap di tengah */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About
        </h2>

        {/* Kontainer Flexbox untuk dua kolom */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
          {/* Kolom Kiri: Deskripsi Diri */}
          <div className="md:w-1/2 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Maftuh Al-Haq
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hello! I'm Maftuh, an Information Systems student with a deep
              interest in web development, which I have been pursuing since the
              beginning of my college journey in 2023.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Driven by curiosity, I took the initiative to learn independently
              through various free online courses and technical content on
              YouTube. This journey has led me to focus on full-stack
              development, where I enjoy the process of building applications
              from an idea into a finished product.
            </p>
          </div>

          {/* Kolom Kanan: Kontak & Media Sosial */}
          <div className="md:w-1/3 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Feel free to reach out if you need my opinion on web development,
              especially regarding full-stack work. I'd be happy to help! (You
              can find my email in the footer).
            </p>

            {/* Ikon Media Sosial */}
            <div className="flex items-center space-x-4">
              {/* Email Icon */}
              <a
                href="mailto:maftuhalhaq@gmail.com" // <-- Ganti dengan alamat email Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <HiOutlineMail size={28} /> {/* Ikon email dari react-icons */}
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/maftuhalhaq" // <-- Ganti dengan link GitHub Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <SiGithub size={28} /> {/* Ikon GitHub */}
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com/in/maftuhalhaq" // <-- Ganti dengan link LinkedIn Anda
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <SiLinkedin size={28} /> {/* Ikon LinkedIn */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
