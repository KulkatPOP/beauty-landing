import Image from "next/image";
import { Card } from "@/data/types";

export function Gallery({ items }: { items: Card[] }) {
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">{items.map((item, index) => <article key={item.title} className={`group overflow-hidden rounded-[1.5rem] border border-[#382428]/10 bg-white ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
    {item.image && <div className="overflow-hidden"><Image width={900} height={620} sizes="(max-width: 767px) 100vw, 50vw" src={item.image} alt={item.title} className="aspect-[16/10] object-cover transition duration-700 ease-out group-hover:scale-[1.035]" /></div>}
    <div className="p-6 md:p-7">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#b7596d]">{item.eyebrow || `Servicio 0${index + 1}`}</p>
      <h3 className="font-display text-3xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 opacity-70">{item.description}</p>
    </div>
  </article>)}</div>;
}
