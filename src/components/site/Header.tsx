import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <a href="#" className="flex items-center gap-2.5 group">
    <div className="relative h-9 w-9 rounded-xl bg-gradient-primary shadow-soft flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="font-display font-bold tracking-tight text-foreground">BlockTerraLab</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">RWA · Blockchain Lab</div>
    </div>
  </a>
);

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "RWA", href: "#rwa" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="hero" size="pill" className="group">
          Let's Talk
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </header>
  );
};
