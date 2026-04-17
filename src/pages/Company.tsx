import { MapPin, Mail, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TEAM, COMPANY_LOCATION } from "@/data/company";

const Company = () => {
  const { lat, lon, address, name } = COMPANY_LOCATION;
  const d = 0.01;
  const bbox = `${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-hero-radial">
          <div className="container py-20 lg:py-28 text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              About BlockTerraLab
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The team building the <span className="text-gradient">on-chain real economy</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're a Seattle-based studio of engineers, designers and operators
              tokenizing real-world assets — starting with real estate.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="container py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Leadership</h2>
            <p className="mt-3 text-muted-foreground">
              Operators and builders with a track record across Web3, fintech and AI.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <Card key={m.name} className="p-7 bg-gradient-card shadow-soft hover:shadow-elevated transition-all">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-gradient-primary">
                    <AvatarFallback className="bg-transparent text-primary-foreground font-display font-semibold text-lg">
                      {m.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-display font-semibold text-lg">{m.name}</div>
                    <div className="text-sm text-primary">{m.role}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* HQ + Map */}
        <section className="container pb-24">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <Card className="p-8 lg:col-span-1 bg-gradient-card shadow-soft">
              <h3 className="font-display text-2xl font-bold">Headquarters</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit us in downtown Seattle, steps from the waterfront.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">{name}</div>
                    <div className="text-muted-foreground">{address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <a href="mailto:hello@blockterralab.com" className="text-muted-foreground hover:text-foreground">
                    hello@blockterralab.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">+1 (206) 555-0142</span>
                </li>
              </ul>
            </Card>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-soft min-h-[420px]">
              <iframe
                title="BlockTerraLab HQ map"
                src={mapSrc}
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
