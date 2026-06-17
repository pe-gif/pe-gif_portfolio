import { ArrowUpRight, FolderGit2 } from "lucide-react";

const SLOTS = [0, 1, 2, 3] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/5 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-zinc-500">02 / Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Plug-and-play slots ready to showcase featured work. Drop in a
            title, description, and a link when each project is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SLOTS.map((index) => (
            <article
              key={index}
              className="animate-fade-in-up group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Glassmorphism sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors group-hover:text-white">
                  <FolderGit2 size={20} />
                </span>
                <span className="font-mono text-xs text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-6 flex-1">
                {/* Placeholder title area */}
                <div className="h-6 w-2/3 rounded-md bg-white/[0.06]" />

                {/* Empty description block */}
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-white/[0.04]" />
                  <div className="h-3 w-11/12 rounded bg-white/[0.04]" />
                  <div className="h-3 w-3/4 rounded bg-white/[0.04]" />
                </div>
              </div>

              {/* Placeholder link button */}
              <div className="relative mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                  Coming soon
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors group-hover:border-white/20 group-hover:text-zinc-300">
                  View project
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
