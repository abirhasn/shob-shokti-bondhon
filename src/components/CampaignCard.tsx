import { Link } from "react-router-dom";
import { Campaign, formatTaka } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Clock, Users } from "lucide-react";

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const percentage = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <Link to={`/campaign/${campaign.id}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={800}
            height={600}
          />
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
            {campaign.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {campaign.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{campaign.description}</p>

          <div className="mt-4">
            <Progress value={percentage} className="h-2" />
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-primary">{formatTaka(campaign.raised)} raised</span>
              <span className="text-muted-foreground">of {formatTaka(campaign.goal)}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{campaign.donors} donors</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{campaign.daysLeft} days left</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
