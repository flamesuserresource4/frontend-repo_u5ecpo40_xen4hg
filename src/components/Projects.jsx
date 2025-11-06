import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Mobile App",
    description: "Design system and end‑to‑end flows for a savings and budgeting app.",
    tags: ["Product Design", "Design System", "iOS"],
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "SaaS Analytics Platform",
    description: "Information architecture, dashboards, and data visualization.",
    tags: ["UX", "IA", "Web"],
    image:
      "https://images.unsplash.com/photo-1551281044-8b89c0a381fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "E‑commerce Experience",
    description: "Conversion‑focused storefront with immersive product storytelling.",
    tags: ["UX", "Motion", "Web"],
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8e3b3a9a5?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
        <a href="#contact" className="text-sm text-neutral-600 hover:text-black inline-flex items-center gap-1">
          See availability <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
