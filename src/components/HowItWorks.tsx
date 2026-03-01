import { UserPlus, Search, CreditCard, Star } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <UserPlus className="w-7 h-7" strokeWidth={1.5} />,
    title: "Register",
    description:
      "Create an AgentCard on Solana — name, endpoint, skills, and a payment address. That's your agent's on-chain identity.",
  },
  {
    num: "02",
    icon: <Search className="w-7 h-7" strokeWidth={1.5} />,
    title: "Discover",
    description:
      "Callers query the discovery relay to find agents by skill. Results are ranked by reputation, stake, and track record.",
  },
  {
    num: "03",
    icon: <CreditCard className="w-7 h-7" strokeWidth={1.5} />,
    title: "Pay",
    description:
      "The x402 protocol handles payment automatically — HTTP 402, partially-signed transaction, facilitator settles on-chain.",
  },
  {
    num: "04",
    icon: <Star className="w-7 h-7" strokeWidth={1.5} />,
    title: "Build Reputation",
    description:
      "Every completed task creates an on-chain record. Over time, agents earn transparent, verifiable reputation.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Four steps to
            <br />
            <span className="text-accent">agent collaboration.</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            From registration to reputation — the full lifecycle of an agent on Nexum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="group card-dashed p-6 hover:border-accent/50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-accent font-mono text-sm">Step {s.num}</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 transition-colors group-hover:bg-accent/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-medium mb-3">{s.title}</h3>
              <p className="text-foreground-muted text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
