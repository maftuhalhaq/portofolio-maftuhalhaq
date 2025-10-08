import React from "react";

// Impor setiap gambar ikon dari folder assets
import JavascriptIcon from "../assets/icons/javascript-svgrepo-com.svg";
import ReactIcon from "../assets/icons/reactjs-svgrepo-com.svg";
import JavaIcon from "../assets/icons/java-svgrepo-com.svg";
import PhpIcon from "../assets/icons/php-svgrepo-com.svg";
import MysqlIcon from "../assets/icons/mysql-svgrepo-com.svg";
import TailwindIcon from "../assets/icons/tailwind-svgrepo-com.svg";
import BootstrapIcon from "../assets/icons/bootstrap-svgrepo-com.svg";
import Html5Icon from "../assets/icons/html5-svgrepo-com.svg";
import Css3Icon from "../assets/icons/css3-svgrepo-com.svg";
import ViteIcon from "../assets/icons/vite-svgrepo-com.svg";
import NodejsIcon from "../assets/icons/nodejs-svgrepo-com.svg";
import GitIcon from "../assets/icons/git-svgrepo-com.svg";
import FigmaIcon from "../assets/icons/figma-svgrepo-com.svg";
import GitHubIcon from "../assets/icons/github-svgrepo-com.svg"; // <-- 1. TAMBAHKAN INI

// Daftar skill dengan nama dan variabel ikonnya
const skills = [
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Java", icon: JavaIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "HTML5", icon: Html5Icon },
  { name: "CSS3", icon: Css3Icon },
  { name: "Vite", icon: ViteIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon }, // <-- 2. DAN TAMBAHKAN INI
  { name: "Figma", icon: FigmaIcon },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Skills & Tools
        </h2>

        {/* KETERANGAN BARU DITAMBAHKAN DI SINI */}
        <p className="text-lg text-slate-500 text-center max-w-3xl mx-auto mb-16">
          These are the primary technologies I use to build modern and
          responsive web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="w-20 h-20 p-4 bg-slate-100 rounded-full shadow-md flex items-center justify-center 
                          animate-float"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
