import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Bangladesh countryside" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container relative z-10 flex flex-col items-center py-24 text-center md:py-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
          <Heart className="h-4 w-4 fill-primary text-primary" />
          Bangladesh's Trusted Crowdfunding Platform
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl animate-fade-up">
          Empower Communities, <span className="text-gradient">Transform Lives</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Join thousands of Bangladeshis making a difference. Fund education, healthcare, clean water, and more — every taka counts.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/campaigns">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Explore Campaigns <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/start-campaign">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Start a Campaign
            </Button>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-8 text-primary-foreground animate-fade-up" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "৳12M+", label: "Raised" },
            { value: "850+", label: "Campaigns" },
            { value: "25K+", label: "Donors" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
