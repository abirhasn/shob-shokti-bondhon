import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignCard from "@/components/CampaignCard";
import { campaigns, categories } from "@/data/campaigns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Campaigns = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const filtered = campaigns.filter((c) => {
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-muted py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">All Campaigns</h1>
          <p className="mt-2 text-muted-foreground">Browse and support causes that matter to Bangladesh.</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search campaigns..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={activeCategory === "All" ? "default" : "outline"}
                onClick={() => setActiveCategory("All")}
                className={activeCategory === "All" ? "bg-primary text-primary-foreground" : ""}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  size="sm"
                  variant={activeCategory === cat.name ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.name)}
                  className={activeCategory === cat.name ? "bg-primary text-primary-foreground" : ""}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <CampaignCard key={c.id} campaign={c} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="text-lg">No campaigns found.</p>
              <p className="text-sm mt-1">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Campaigns;
