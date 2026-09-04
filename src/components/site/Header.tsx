import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 group min-w-0">
    <img
      src={logo}
      alt="TokenBrickLabs logo"
      className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shadow-soft object-contain shrink-0"
    />
    <div className="leading-tight min-w-0">
      <div className="font-display font-bold tracking-tight text-foreground text-sm sm:text-base truncate">TokenBrickLabs</div>
      <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">RWA · Blockchain Lab</div>
    </div>
  </Link>
);


const NAV = [
  { label: "RWA", href: "/#rwa" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#insights" },
];

const COMPANY_ITEMS: { label: string; desc: string; to: string; icon: React.ComponentType<{ className?: string }> }[] = [];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/talents"
            className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/70 transition-colors"
          >
            Talent Recruitment
          </Link>
          <Link
            to="/company"
            className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/70 transition-colors"
          >
            Company
          </Link>
          <Link
            to="/docs"
            className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/70 transition-colors"
          >
            Docs
          </Link>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="hero" size="pill" className="group" asChild>
            <a href="https://calendly.com/tokenbricklabs-support/30min" target="_blank" rel="noopener noreferrer">
              Let's Talk
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
};
