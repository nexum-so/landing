import { Radar, Banknote, HelpCircle, Lock } from "lucide-react";

const problems = [
  {
    icon: <Radar className="w-6 h-6" strokeWidth={1.5} />,
    title: "Agents Can't Find Each Other",
    description:
      "There's no directory. Your agent has no way to discover other agents that can help with a task.",
  },
  {
    icon: <Banknote className="w-6 h-6" strokeWidth={1.5} />,
    title: "No Standard Payments",
    description:
      "How does one agent pay another for work? There's no protocol for machine-to-machine payments.",
  },
  {
    icon: <HelpCircle className="w-6 h-6" strokeWidth={1.5} />,
    title: "Trust Is Guesswork",
    description:
      "With no reputation system, callers can't tell good agents from bad ones until it's too late.",
  },
  {
    icon: <Lock className="w-6 h-6" strokeWidth={1.5} />,
    title: "Walled Gardens",
    description:
      "Platforms lock agents into closed ecosystems. No interoperability, no portability.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-background-elevated" />
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI agents are powerful.
            <br />
            <span className="text-accent">But they work alone.</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            Billions of agents are coming online, but there&apos;s no infrastructure for them to collaborate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group card-dashed p-6 hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 transition-colors group-hover:bg-accent/20">
                {p.icon}
              </div>
              <h3 className="text-base font-medium mb-2">{p.title}</h3>
              <p className="text-foreground-muted text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
