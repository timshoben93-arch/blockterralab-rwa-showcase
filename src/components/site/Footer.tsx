export const Footer = () => {
  const cols = [
    { t: "Solutions", l: ["RWA Tokenization", "Smart Contract Audits", "L1 / L2 Engineering", "Compliance Rails"] },
    { t: "Industries", l: ["Real Estate", "Private Credit", "Commodities", "Sustainability"] },
    { t: "Company", l: ["About", "Careers", "Insights", "Contact"] },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
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
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">{c.t}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
