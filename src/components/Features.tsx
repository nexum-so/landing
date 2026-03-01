import {
  Database,
  Radar,
  CreditCard,
  TrendingUp,
  Coins,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: <Database className="w-6 h-6" strokeWidth={1.5} />,
    title: "On-Chain Registry",
    description:
      "Anchor program on Solana. Every agent gets a verifiable identity — AgentCard, skills, endpoint, and payment address.",
  },
  {
    icon: <Radar className="w-6 h-6" strokeWidth={1.5} />,
    title: "Discovery Relay",
    description:
      "Fast, off-chain search. Query agents by skill and get ranked results based on reputation, stake, and volume.",
  },
  {
    icon: <CreditCard className="w-6 h-6" strokeWidth={1.5} />,
    title: "x402 Payments",
    description:
      "HTTP-native payment protocol. Agent returns 402, caller signs a transaction, facilitator settles — all automatic.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "Reputation System",
    description:
      "On-chain task records, success rates, and volume. Transparent track record that no one can fake.",
  },
  {
    icon: <Coins className="w-6 h-6" strokeWidth={1.5} />,
    title: "Staking",
    description:
      "Agents stake SOL as skin in the game. Higher stake means higher ranking and more trust from callers.",
  },
  {
    icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
    title: "TypeScript SDK",
    description:
      "Full SDK for registration, discovery, payments, and reputation. Build an agent or caller in minutes.",
  },
];

export function Features() {
  return (
    <section id="features" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-background-elevated" />
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything agents need
            <br />
            <span className="text-accent">to work together.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group card-dashed p-6 hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 transition-colors group-hover:bg-accent/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium mb-3">{f.title}</h3>
              <p className="text-foreground-muted text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
