import { CreatorData } from "./types";

export const beauty: CreatorData = {
  slug: "beauty",
  name: "Sofía Rose",
  role: "Creadora UGC · Belleza y bienestar",
  headline: "Contenido que conecta. Resultados que convierten.",
  intro: "Creo contenido UGC estratégico para marcas de belleza que quieren ganar confianza, detener el scroll y transformar atención en acción.",
  about: "Ayudo a marcas de belleza y bienestar a comunicar beneficios reales con una voz cercana y creíble. Cada pieza combina estrategia, sensibilidad estética y una demostración clara del valor del producto.",
  specialty: "UGC · Beauty · Contenido de performance",
  heroImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=85",
  palette: { bg: "#fff4f5", surface: "#ffffff", accent: "#b7596d", ink: "#382428" },
  nav: ["Servicios", "Portafolio", "Media kit", "Marcas", "Contacto"],
  categories: [
    { title: "Videos UGC", eyebrow: "Contenido vertical", description: "Concepto, guion, grabación y edición con hook, demostración y llamada a la acción.", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85" },
    { title: "Reseñas de producto", eyebrow: "Prueba social", description: "Testimonios cercanos y demostraciones honestas que convierten beneficios en confianza.", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85" },
    { title: "Unboxing", eyebrow: "Primera impresión", description: "Experiencias de apertura con ritmo, detalle y foco en los atributos diferenciales." },
    { title: "Fotografía de producto", eyebrow: "Activos visuales", description: "Imágenes limpias y versátiles para contenido orgánico, e-commerce y paid media." },
    { title: "Campañas digitales", eyebrow: "Concepto integral", description: "Sistemas de contenido multiformato alineados con objetivos de alcance y conversión." },
  ],
  portfolio: [
    { title: "Glow Beauty", eyebrow: "Video de skincare", description: "Rutina de tres pasos con demostración de textura, aplicación y resultado.", result: "3,2× ROAS" },
    { title: "Nativa Lab", eyebrow: "Testimonio UGC", description: "Historia de uso real durante 14 días para campaña de adquisición.", result: "+31 % en CTR" },
    { title: "Mellow Skin", eyebrow: "Lanzamiento de producto", description: "Unboxing, demostración y seis activos derivados para redes y paid media.", result: "860 mil de alcance" },
  ],
  brands: ["GLOW BEAUTY", "NATIVA LAB", "MELLOW", "DEW", "ALBA"],
  stats: [
    { value: "128 mil", label: "Seguidores" },
    { value: "1,4 M", label: "Alcance mensual" },
    { value: "82 %", label: "Audiencia femenina" },
    { value: "18–34", label: "Edad principal" },
  ],
  socials: [
    { label: "Instagram · demo", href: "https://www.instagram.com/" },
    { label: "TikTok · demo", href: "https://www.tiktok.com/" },
    { label: "Email · demo", href: "mailto:marcas@example.com" },
  ],
};
