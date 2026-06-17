import Link from "next/link";
import { Github } from "lucide-react";
import { site } from "@/app/lib/site";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050507]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-70"
        >
          PN<span className="text-zinc-500">.</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="ml-1 rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
