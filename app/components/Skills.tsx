import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglecloud,
  SiDocker,
  SiOpentelemetry,
} from "react-icons/si";
import { Cpu } from "lucide-react";

type Skill = {
  name: string;
  Icon: IconType;
  /** Brand accent used for the icon and hover glow. */
  color: string;
};

const skills: Skill[] = [
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "OpenTelemetry", Icon: SiOpentelemetry, color: "#F5A800" },
  { name: "ARM64 / Virtualization", Icon: Cpu, color: "#A78BFA" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/5 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-zinc-500">01 / Skills</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-zinc-400">
            The tools I reach for to ship reliable software across the full
            stack — from embedded systems to the browser.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {skills.map(({ name, Icon, color }) => (
            <li key={name}>
              <div
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                style={
                  {
                    "--glow": color,
                  } as React.CSSProperties
                }
              >
                {/* Hover glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120px circle at center, color-mix(in srgb, var(--glow) 22%, transparent), transparent 70%)",
                  }}
                />
                <Icon
                  size={26}
                  className="relative shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                />
                <span className="relative text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                  {name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
