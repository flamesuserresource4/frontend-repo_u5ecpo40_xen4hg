import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-white to-neutral-50 p-10 shadow-sm">
        <div className="md:flex items-center justify-between gap-10">
          <div className="md:max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-neutral-600">
              I’m currently taking on select freelance projects. For collaborations or inquiries, drop me a line and I’ll get back within 24 hours.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="mailto:hello@ava.design"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-sm transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> hello@ava.design <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-10 flex items-center justify-between text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Ava — UI/UX Designer</p>
        <a href="#home" className="hover:text-black">Back to top</a>
      </footer>
    </section>
  );
}
