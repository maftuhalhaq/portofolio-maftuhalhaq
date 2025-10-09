import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // PASTIKAN BARIS INI ADA DAN BENAR
  base: "/portofolio-maftuhalhaq/",
  plugins: [
    react(), 
    tailwindcss()
  ],
});
