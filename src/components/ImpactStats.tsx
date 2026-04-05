import { Heart, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "৳12.5M+", label: "Total Raised" },
  { icon: Heart, value: "850+", label: "Campaigns Funded" },
  { icon: Users, value: "25,000+", label: "Generous Donors" },
  { icon: MapPin, value: "64", label: "Districts Reached" },
];

const ImpactStats = () => {
  return (
    <section className="bg-hero py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Our Impact Across Bangladesh</h2>
          <p className="mt-2 text-primary-foreground/70">Real change, powered by the generosity of thousands.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-count-up">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground/80" />
              <p className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
