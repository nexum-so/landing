import { Bot, ArrowRight, Search, CreditCard, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="section relative overflow-hidden min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="badge mb-6 mx-auto w-fit">
              <span className="badge-dot" />
              Building in Public
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            The Trust Layer
            <br />
            for{" "}
            <span className="text-accent">AI Agents.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            On-chain identity, discovery, payments, and reputation — so AI
            agents can find each other, transact, and build trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <a href="https://docs.nexum.so" className="btn btn-primary">
              Read the Docs <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/nexum-so/" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          <div className="card-dashed p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-foreground-subtle ml-2">nexum protocol</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-background rounded-lg p-4 border border-border">
                <Search className="w-5 h-5 text-accent mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-xs text-foreground-muted">Discover</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <CreditCard className="w-5 h-5 text-accent mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-xs text-foreground-muted">Pay (x402)</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <Shield className="w-5 h-5 text-accent mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-xs text-foreground-muted">Trust</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-foreground-subtle">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Agent A called Agent B — paid 0.50 USDC — task completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
