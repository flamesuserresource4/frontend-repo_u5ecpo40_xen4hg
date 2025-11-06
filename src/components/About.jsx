export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-neutral-600">
            I’m a multidisciplinary designer with a focus on crafting clear, elegant product experiences. I combine research, systems thinking, and motion to create products that feel simple and human.
          </p>
          <p className="mt-3 text-neutral-600">
            I’ve worked with startups and global brands, helping teams ship products quickly while maintaining design quality through scalable design systems.
          </p>
        </div>
        <div className="md:col-span-3">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-medium">Expertise</h3>
              <p className="mt-2 text-sm text-neutral-600">Product Design, UX Research, Design Systems, Prototyping, Animation</p>
            </li>
            <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-medium">Tools</h3>
              <p className="mt-2 text-sm text-neutral-600">Figma, Framer, After Effects, Principle, Notion</p>
            </li>
            <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-medium">Industries</h3>
              <p className="mt-2 text-sm text-neutral-600">Fintech, SaaS, E‑commerce, Education</p>
            </li>
            <li className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-medium">Approach</h3>
              <p className="mt-2 text-sm text-neutral-600">Research‑driven, collaborative, and detail‑oriented</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
