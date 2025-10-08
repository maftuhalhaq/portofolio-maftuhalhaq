import React, { useState, useEffect } from "react";

function Navbar() {
  // State untuk melacak posisi scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek posisi scroll
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Jika di-scroll lebih dari 10px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan event listener saat komponen pertama kali dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array kosong [] berarti efek ini hanya berjalan sekali

  return (
    // Kelas CSS diubah secara dinamis di sini
    <nav
      className={`
        py-4 sticky top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/50 backdrop-blur-sm shadow-md"
            : "bg-white shadow-sm"
        }
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Maftuh Al-Haq
        </a>
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          {/* LINK "SKILLS" DITAMBAHKAN DI SINI */}
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
