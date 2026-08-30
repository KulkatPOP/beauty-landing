import Link from "next/link";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Media kit", href: "#media-kit" },
  { label: "Marcas", href: "#marcas" },
];

export function Navbar({ name }: { name: string }) {
  return <nav aria-label="Navegación principal" className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white">
    <div className="flex items-center justify-between px-5 py-5 md:px-12 md:py-6">
      <Link href="#top" className="font-display text-2xl tracking-wide transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{name}</Link>
      <div className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[.18em] md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{link.label}</Link>)}</div>
      <Link href="#contacto" className="rounded-full border border-white/75 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.18em] transition-colors hover:bg-white hover:text-[#382428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Solicitar propuesta</Link>
    </div>
    <div className="flex gap-6 overflow-x-auto px-5 pb-4 text-[10px] font-bold uppercase tracking-[.16em] md:hidden">{links.map((link) => <Link key={link.href} href={link.href} className="shrink-0 text-white/80 transition-colors hover:text-white">{link.label}</Link>)}</div>
  </nav>;
}
