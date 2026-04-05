import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { campaigns, formatTakaFull } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Users, MapPin, Share2, Heart, ArrowLeft, CalendarDays } from "lucide-react";
import { toast } from "sonner";

const CampaignDetail = () => {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id);
  const [donationAmount, setDonationAmount] = useState("");

  if (!campaign) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Campaign not found</h1>
          <Link to="/campaigns"><Button className="mt-4">Browse Campaigns</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const percentage = Math.round((campaign.raised / campaign.goal) * 100);
  const presets = [500, 1000, 2500, 5000];

  const handleDonate = () => {
    const amt = Number(donationAmount);
    if (!amt || amt < 10) {
      toast.error("Please enter an amount of at least ৳10");
      return;
    }
    toast.success(`Thank you for donating ${formatTakaFull(amt)}! 🎉`, {
      description: "Your generosity will make a real difference.",
    });
    setDonationAmount("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-8">
        <Link to="/campaigns" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Campaigns
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={campaign.image} alt={campaign.title} className="w-full rounded-xl object-cover aspect-video" width={800} height={600} />
            <h1 className="mt-6 font-display text-2xl font-bold text-foreground md:text-3xl">{campaign.title}</h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{campaign.location}</span>
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />Started {campaign.createdAt}</span>
              <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">{campaign.category}</span>
            </div>

            <div className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">{campaign.longDescription}</div>

            {campaign.updates.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Campaign Updates</h3>
                <div className="space-y-4">
                  {campaign.updates.map((u, i) => (
                    <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                      <p className="text-xs font-medium text-primary mb-1">{u.date}</p>
                      <p className="text-sm text-foreground">{u.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">{formatTakaFull(campaign.raised)}</p>
                <p className="text-sm text-muted-foreground">raised of {formatTakaFull(campaign.goal)} goal</p>
              </div>

              <Progress value={percentage} className="mt-4 h-3" />
              <p className="mt-1 text-right text-xs text-muted-foreground">{percentage}% funded</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-muted p-3">
                  <Users className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-lg font-bold text-foreground">{campaign.donors}</p>
                  <p className="text-xs text-muted-foreground">Donors</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <Clock className="mx-auto h-5 w-5 text-warm" />
                  <p className="mt-1 text-lg font-bold text-foreground">{campaign.daysLeft}</p>
                  <p className="text-xs text-muted-foreground">Days Left</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground mb-2">Select amount</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {presets.map((p) => (
                    <Button
                      key={p}
                      variant="outline"
                      size="sm"
                      onClick={() => setDonationAmount(String(p))}
                      className={donationAmount === String(p) ? "border-primary bg-accent text-primary" : ""}
                    >
                      ৳{p.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <Input
                  type="number"
                  placeholder="Enter custom amount (৳)"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  min={10}
                />
                <Button className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" size="lg" onClick={handleDonate}>
                  <Heart className="h-4 w-4" /> Donate Now
                </Button>
              </div>

              <Button variant="outline" className="mt-3 w-full gap-2" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard!");
              }}>
                <Share2 className="h-4 w-4" /> Share Campaign
              </Button>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">Organized by</p>
                <p className="text-sm font-semibold text-foreground">{campaign.organizer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampaignDetail;
