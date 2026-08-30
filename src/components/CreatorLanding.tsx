import Image from "next/image";
import { CreatorData } from "@/data/types";
import { Navbar } from "./Navbar";
import { SectionTitle } from "./SectionTitle";
import { Gallery } from "./Gallery";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export function CreatorLanding({ data }: { data: CreatorData }) {
  return <main id="top" style={{ background: data.palette.bg, color: data.palette.ink }}>
    <a href="#contenido" className="fixed left-3 top-3 z-50 -translate-y-20 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#382428] transition-transform focus:translate-y-0">Saltar al contenido</a>
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image unoptimized priority fill sizes="100vw" src={data.heroImage} alt={`${data.name}, creadora UGC de belleza`} className="object-cover object-[52%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#382428]/90 via-[#382428]/50 to-[#382428]/15" />
      <Navbar name={data.name} />
      <div id="contenido" className="relative z-10 flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-40 text-white md:px-12 md:pb-24">
        <p className="reveal mb-5 text-[11px] font-bold uppercase tracking-[.28em] text-[#ffd9df]">{data.role}</p>
        <h1 className="reveal font-display max-w-4xl text-[clamp(3.7rem,8vw,7.8rem)] leading-[.86] tracking-[-.025em]">{data.headline}</h1>
        <div className="mt-8 flex max-w-4xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/80">{data.intro}</p>
          <a href="#contacto" className="w-fit shrink-0 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[.18em] text-[#382428] transition-colors hover:bg-[#ffd9df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Solicitar propuesta →</a>
        </div>
      </div>
    </section>

    <section id="sobre-mi" className="mx-auto grid max-w-6xl scroll-mt-8 gap-12 px-6 py-24 md:grid-cols-[.7fr_1.3fr] md:px-12 md:py-32">
      <SectionTitle eyebrow="Enfoque creativo" title="Autenticidad con estrategia." />
      <div><p className="font-display text-3xl leading-snug md:text-5xl">{data.about}</p><p className="mt-8 text-xs font-bold uppercase tracking-[.22em]" style={{ color: data.palette.accent }}>{data.specialty}</p></div>
    </section>

    <section id="servicios" className="scroll-mt-0 px-6 py-24 md:px-12 md:py-32" style={{ background: data.palette.surface }}>
      <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Servicios para marcas" title="Contenido diseñado para convertir." /><Gallery items={data.categories} /></div>
    </section>

    <section id="portafolio" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-24 md:px-12 md:py-36">
      <SectionTitle eyebrow="Casos seleccionados" title="Campañas. Contenido. Resultados." />
      <div className="grid border-t border-current/20">{data.portfolio.map((project, index) => <article key={project.title} className="grid gap-4 border-b border-current/20 py-8 md:grid-cols-[60px_1fr_1fr_180px] md:items-center">
        <span className="text-xs opacity-50">0{index + 1}</span>
        <div><p className="text-[10px] font-bold uppercase tracking-widest text-[#b7596d]">{project.eyebrow}</p><h3 className="font-display text-4xl">{project.title}</h3></div>
        <p className="max-w-md text-sm leading-6 opacity-65">{project.description}</p>
        <strong className="text-sm" style={{ color: data.palette.accent }}>{project.result}</strong>
      </article>)}</div>
    </section>

    {data.stats && <section id="media-kit" className="scroll-mt-0 px-6 py-24 text-white md:px-12 md:py-32" style={{ background: data.palette.ink }}>
      <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Media kit 2026" title="Una audiencia que confía." /><div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] bg-white/20 md:grid-cols-4">{data.stats.map((stat) => <div key={stat.label} className="bg-[#382428] p-6 md:p-9"><strong className="font-display text-4xl md:text-6xl">{stat.value}</strong><p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/55">{stat.label}</p></div>)}</div></div>
    </section>}

    <section id="marcas" className="scroll-mt-8 overflow-hidden border-y border-current/15 py-12"><p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[.3em] opacity-50">Marcas colaboradoras</p><div className="flex flex-wrap justify-center gap-x-10 gap-y-5 px-6 font-display text-2xl opacity-70 md:gap-x-16 md:text-3xl">{data.brands.map((brand) => <span key={brand}>{brand}</span>)}</div></section>

    <section id="contacto" className="mx-auto grid max-w-6xl scroll-mt-8 gap-14 px-6 py-24 md:grid-cols-[.8fr_1.2fr] md:px-12 md:py-36">
      <div><SectionTitle eyebrow="Colaboraciones" title="Hablemos de tu próxima campaña." /><p className="max-w-md leading-7 opacity-70">Comparte el objetivo, los entregables y las fechas de tu proyecto. Prepararé una propuesta de contenido alineada con la voz y los resultados que necesita tu marca.</p><a href="mailto:marcas@sofiarose.com" className="mt-6 inline-block border-b border-current pb-1 text-sm transition-opacity hover:opacity-55">marcas@sofiarose.com</a></div>
      <ContactForm />
    </section>
    <Footer data={data} />
  </main>;
}
