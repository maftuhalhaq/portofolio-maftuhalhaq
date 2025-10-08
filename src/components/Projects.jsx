import React from "react";
import { SiGithub } from "react-icons/si"; // Mengimpor ikon GitHub

// Data proyek yang lebih detail
const myProjects = [
  {
    title: "Personal Portfolio Website",
    description:
      "An interactive portfolio built from scratch to showcase my projects and skills.",
    image: "../../public/myproject.jpg", // <-- Ganti dengan path gambar Anda
    tags: ["React", "Tailwind CSS", "Vite"],
    liveLink: "#", // <-- Ganti dengan link deploy
    repoLink: "https://github.com/your-username/your-repo", // <-- Ganti dengan link repo
  },
  {
    title: "To-Do List App",
    description:
      "A functional task management application with features to add, delete, and mark tasks as complete.",
    image: "../../public/myproject.jpg", // <-- Ganti dengan path gambar Anda
    tags: ["React", "JavaScript", "CSS3"],
    liveLink: "#",
    repoLink: "https://github.com/your-username/your-repo",
  },
  {
    title: "Website UI Clone",
    description:
      "A recreation of a popular website's user interface to practice styling skills.",
    image: "../../public/myproject.jpg", // <-- Ganti dengan path gambar Anda
    tags: ["React", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "https://github.com/your-username/your-repo",
  },
];

// Komponen Kartu Proyek yang sudah ditingkatkan
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveLink,
  repoLink,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
    {/* Gambar Proyek */}
    <div className="overflow-hidden h-48">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="p-6">
      {/* Tag Teknologi */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Judul dan Deskripsi */}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      {/* Link Aksi */}
      <div className="flex items-center gap-4">
        <a
          href={liveLink}
          target=""
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Demo
        </a>
        <a
          //   href={repoLink}
          href="#"
          //   target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <SiGithub />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
);

function Projects() {
  return (
    // Mengganti latar belakang agar kontras dengan kartu
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Featured Projects
        </h2>

        {/* DESKRIPSI BARU DITAMBAHKAN DI SINI */}
        <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-12">
          Showcase of my works on web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
