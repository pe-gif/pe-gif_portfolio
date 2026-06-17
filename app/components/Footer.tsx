import { Github } from "lucide-react";
import { site } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &
          Tailwind CSS.
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <Github size={16} />
          @pe-gif
        </a>
      </div>
    </footer>
  );
}
