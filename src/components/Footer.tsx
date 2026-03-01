import Link from "next/link";
import { Bot, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-black" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium">Nexum</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://docs.nexum.so"
              className="text-xs text-foreground-subtle hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/nexum-so/"
              className="text-xs text-foreground-subtle hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a
                href="https://github.com/nexum-so/"
                className="text-foreground-subtle hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/nexum_so"
                className="text-foreground-subtle hover:text-accent transition-colors"
              >
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
            <span className="text-foreground-subtle text-xs hidden sm:block">
              &copy; {new Date().getFullYear()} Nexum
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
