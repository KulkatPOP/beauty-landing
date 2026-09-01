import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
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
  metadataBase: getSiteUrl(),
  title: "Sofía Rose | Creadora UGC de belleza",
  description: "Contenido UGC estratégico, reseñas y campañas digitales para marcas de belleza y bienestar.",
  keywords: ["creadora UGC", "UGC belleza", "contenido para marcas", "beauty creator", "campañas digitales"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Sofía Rose | Beauty & UGC Creator", description: "Contenido estratégico para marcas de belleza que buscan conectar y convertir.", type: "website", locale: "es_CL", url: "/", siteName: "Sofía Rose", images: [{ url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&h=630&q=85", width: 1200, height: 630, alt: "Sofía Rose, creadora UGC de belleza" }] },
  twitter: { card: "summary_large_image", title: "Sofía Rose | Beauty & UGC Creator", description: "Contenido estratégico para marcas de belleza que buscan conectar y convertir.", images: ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&h=630&q=85"] },
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
