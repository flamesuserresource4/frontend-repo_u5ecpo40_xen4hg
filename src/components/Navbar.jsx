import { Mail, Linkedin, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">
          <span className="text-black">Ava</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-500">Design</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@ava.design"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://ava.design"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
