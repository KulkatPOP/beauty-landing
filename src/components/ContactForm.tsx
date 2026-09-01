"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const encodedData = new URLSearchParams();
      new FormData(form).forEach((value, key) => encodedData.append(key, String(value)));
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("sent");
      form.reset();
    } catch { setStatus("error"); }
  }

  if (status === "sent") return <div role="status" aria-live="polite" className="rounded-[1.5rem] border border-current/15 bg-white p-8 text-center"><p className="font-display text-4xl">Brief enviado.</p><p className="mt-2 opacity-70">El formulario se envió correctamente. Gracias por considerar a Sofía.</p></div>;

  return <form name="colaboraciones-beauty" method="POST" action="/__forms.html" onSubmit={submit} aria-busy={status === "sending"} className="grid gap-6 rounded-[1.5rem] bg-white p-6 shadow-[0_25px_80px_rgba(56,36,40,.08)] md:p-9">
    <input type="hidden" name="form-name" value="colaboraciones-beauty" />
    <label className="hidden" aria-hidden="true">No completar<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
    <div className="grid gap-6 md:grid-cols-2">
      <label className="text-xs font-bold uppercase tracking-widest">Nombre<input name="nombre" required autoComplete="name" className="mt-2 w-full border-b border-current/25 bg-transparent py-3 outline-none transition-colors focus:border-[#b7596d]" placeholder="Tu nombre" /></label>
      <label className="text-xs font-bold uppercase tracking-widest">Email corporativo<input name="email" required type="email" autoComplete="email" className="mt-2 w-full border-b border-current/25 bg-transparent py-3 outline-none transition-colors focus:border-[#b7596d]" placeholder="hola@marca.com" /></label>
    </div>
    <label className="text-xs font-bold uppercase tracking-widest">Marca o agencia<input name="marca" required autoComplete="organization" className="mt-2 w-full border-b border-current/25 bg-transparent py-3 outline-none transition-colors focus:border-[#b7596d]" placeholder="Nombre de la empresa" /></label>
    <label className="text-xs font-bold uppercase tracking-widest">Objetivo de campaña<textarea name="mensaje" required rows={4} className="mt-2 w-full resize-none border-b border-current/25 bg-transparent py-3 outline-none transition-colors focus:border-[#b7596d]" placeholder="Objetivo, entregables, canales y fechas estimadas…" /></label>
    {status === "error" && <p role="alert" className="text-sm text-red-800">No fue posible enviar el formulario. Usa el correo de demostración <a className="underline" href="mailto:marcas@example.com">marcas@example.com</a>.</p>}
    <button type="submit" disabled={status === "sending"} className="mt-2 w-fit rounded-full bg-[#382428] px-7 py-4 text-xs font-bold uppercase tracking-[.18em] text-white transition duration-300 hover:bg-[#b7596d] disabled:cursor-wait disabled:opacity-50">{status === "sending" ? "Enviando…" : "Enviar brief →"}</button>
  </form>;
}
