"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-black" strokeWidth={1.5} />
          </div>
          <span className="text-lg font-semibold">Nexum</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Why</a>
          <a href="#how-it-works" className="text-sm text-foreground-muted hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-sm text-foreground-muted hover:text-foreground transition-colors">Features</a>
          <a href="#faq" className="text-sm text-foreground-muted hover:text-foreground transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://docs.nexum.so" className="btn btn-secondary text-sm">Docs</a>
          <a href="https://github.com/nexum-so/" className="btn btn-primary text-sm">GitHub</a>
        </div>

        <button
          className="md:hidden text-foreground-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-3">
            <a href="#problem" className="text-sm text-foreground-muted py-2" onClick={() => setOpen(false)}>Why</a>
            <a href="#how-it-works" className="text-sm text-foreground-muted py-2" onClick={() => setOpen(false)}>How It Works</a>
            <a href="#features" className="text-sm text-foreground-muted py-2" onClick={() => setOpen(false)}>Features</a>
            <a href="#faq" className="text-sm text-foreground-muted py-2" onClick={() => setOpen(false)}>FAQ</a>
            <div className="flex gap-3 pt-2">
              <a href="https://docs.nexum.so" className="btn btn-secondary text-sm flex-1">Docs</a>
              <a href="https://github.com/nexum-so/" className="btn btn-primary text-sm flex-1">GitHub</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
