import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sofía Rose | Creadora UGC de belleza",
  description: "Contenido UGC estratégico, reseñas y campañas digitales para marcas de belleza y bienestar.",
  keywords: ["creadora UGC", "UGC belleza", "contenido para marcas", "beauty creator", "campañas digitales"],
  openGraph: { title: "Sofía Rose | Beauty & UGC Creator", description: "Contenido estratégico para marcas de belleza que buscan conectar y convertir.", type: "website", locale: "es_CL" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
