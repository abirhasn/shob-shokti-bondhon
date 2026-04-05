import { campaigns } from "@/data/campaigns";
import CampaignCard from "./CampaignCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedCampaigns = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Make a Difference</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Featured Campaigns</h2>
          </div>
          <Link to="/campaigns" className="hidden sm:block">
            <Button variant="ghost" className="gap-1 text-primary hover:text-primary/80">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.slice(0, 3).map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/campaigns">
            <Button className="bg-primary text-primary-foreground gap-1">
              View All Campaigns <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
