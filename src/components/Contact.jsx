import React from "react";
// Impor ikon yang Anda butuhkan
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <footer id="contact" className="bg-slate-900 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Kolom 1: Nama & Kontak */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-white mb-4 inline-block"
            >
              Maftuh Al-Haq
            </a>
            <p className="text-sm mb-4">
              © 2025 Maftuh Al-Haq.
              <br />
              All rights reserved.
            </p>
            {/* Ikon Kontak */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.instagram.com/maftuhalhaq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={24} />
              </a>
              <a
                href="mailto:maftuhalhaq@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail size={24} />
              </a>
              <a
                href="https://github.com/maftuhalhaq" // <-- Ganti dengan link GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/maftuhalhaq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Get in Touch */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wider">
              Get in Touch
            </h4>
            <p className="mb-2">
              Malang, East Java
              <br />
              Indonesia
            </p>
            <a
              href="mailto:maftuhalhaq@gmail.com"
              className="mb-2 hover:text-white transition-colors"
            >
              maftuhalhaq@gmail.com
            </a>
          </div>

          {/* Kolom 3: Links */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wider">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wider">
              Our Newsletter
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter to get my latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 text-white px-5 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
