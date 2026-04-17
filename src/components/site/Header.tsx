import { ArrowRight, ChevronDown, Building2, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SERVICES } from "@/data/services";
import { TALENTS } from "@/data/talents";
import logo from "@/assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <img
      src={logo}
      alt="BlockTerraLab logo"
      className="h-10 w-10 rounded-xl shadow-soft object-contain"
    />
    <div className="leading-tight">
      <div className="font-display font-bold tracking-tight text-foreground">BlockTerraLab</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">RWA · Blockchain Lab</div>
    </div>
  </Link>
);

const NAV = [
  { label: "RWA", href: "/#rwa" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#insights" },
];

const COMPANY_ITEMS = [
  { label: "About Us", desc: "Our mission and team", to: "/company", icon: Building2 },
  { label: "Leadership", desc: "Meet CEO, CTO & Tech Lead", to: "/company#team", icon: Users },
  { label: "Headquarters", desc: "Visit us in Seattle, WA", to: "/company#hq", icon: MapPin },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none">
              Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <DropdownMenuItem key={s.slug} asChild>
                    <Link
                      to={`/services/${s.slug}`}
                      className="flex items-start gap-3 cursor-pointer py-2"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{s.short}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{s.tagline}</span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none">
              Talent Recruitment
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 max-h-[70vh] overflow-y-auto">
              {TALENTS.map((t) => {
                const Icon = t.icon;
                return (
                  <DropdownMenuItem key={t.slug} asChild>
                    <Link
                      to={`/talents/${t.slug}`}
                      className="flex items-start gap-3 cursor-pointer py-2"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{t.short}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{t.tagline}</span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none">
              Company
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              {COMPANY_ITEMS.map((c) => {
                const Icon = c.icon;
                return (
                  <DropdownMenuItem key={c.label} asChild>
                    <Link to={c.to} className="flex items-start gap-3 cursor-pointer py-2">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{c.label}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{c.desc}</span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="hero" size="pill" className="group">
            Let's Talk
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
