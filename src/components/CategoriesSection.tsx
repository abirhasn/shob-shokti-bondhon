import { GraduationCap, Heart, Droplets, Shield, Users, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/campaigns";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Heart, Droplets, Shield, Users, Sprout,
};

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Campaign Categories</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <Link
                key={cat.name}
                to={`/campaigns?category=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                <span className="text-xs text-muted-foreground">{cat.count} campaigns</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
