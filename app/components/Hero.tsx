import { ArrowUpRight, FileDown, Github } from "lucide-react";
import { site } from "@/app/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-glow px-6 pt-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p
            className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-400"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </p>

          <h1
            className="animate-fade-in-up text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            {site.name}
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {site.role} bridging{" "}
            <span className="text-zinc-200">hardware</span>,{" "}
            <span className="text-zinc-200">systems</span>, and{" "}
            <span className="text-zinc-200">scalable web applications</span>. I
            build from the silicon up — turning low-level performance into
            polished, production-grade products.
          </p>

          <div
            className="animate-fade-in-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
            >
              <FileDown size={16} />
              Download Résumé
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight
                size={14}
                className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
