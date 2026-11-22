export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
      {faqs.map(({ q, a }) => (
        <details key={q} className="group px-6 py-5 open:bg-shell/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-[1.05rem] font-bold text-cape-slate">
            {q}
            <span aria-hidden="true" className="text-2xl font-normal text-ocean-teal transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-[62ch]">{a}</p>
        </details>
      ))}
    </div>
  );
}
