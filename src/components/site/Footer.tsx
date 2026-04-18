import { Link } from "react-router-dom";
import { TALENTS } from "@/data/talents";

export const Footer = () => {
  const navLinks = [
    { label: "Company", to: "/company" },
    { label: "RWA", to: "/#rwa" },
    { label: "Industries", to: "/#industries" },
    { label: "Insights", to: "/#insights" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 12l9 4 9-4" />
                  <path d="M3 17l9 4 9-4" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">BlockTerraLab</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Engineering the bridge between real-world assets and on-chain markets.
              Audited. Compliant. Production-grade.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Talent Recruitment</h4>
            <ul className="mt-4 space-y-2.5">
              {TALENTS.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={`/talents/${t.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://calendly.com/blockterralab-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BlockTerraLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
