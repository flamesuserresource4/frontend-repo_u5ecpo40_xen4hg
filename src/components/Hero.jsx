import Spline from "@splinetool/react-spline";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
            Available for freelance projects
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Crafting intuitive, elegant interfaces that feel effortless.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600 md:text-lg">
            I’m Ava, a UI/UX designer focused on product design, interaction, and delightful micro‑animations. I blend research with visual storytelling to create products people love.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white shadow-sm transition hover:opacity-90"
            >
              View Work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-black transition hover:bg-black/5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
