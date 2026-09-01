import { CreatorData } from "@/data/types";

export function Footer({ data }: { data: CreatorData }) {
  return <footer className="flex flex-col gap-7 border-t border-current/15 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
    <a href="#top" className="font-display text-2xl transition-opacity hover:opacity-60">{data.name}</a>
    <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">{data.socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} className="transition-opacity hover:opacity-55">{social.label}{social.href.startsWith("http") && <span aria-hidden="true"> ↗</span>}</a>)}</div>
    <div className="text-xs opacity-55"><a className="transition-opacity hover:opacity-70" href="mailto:marcas@example.com">marcas@example.com <span className="sr-only">(demo)</span></a><p className="mt-1">© 2026 · Media kit profesional</p></div>
  </footer>;
}
