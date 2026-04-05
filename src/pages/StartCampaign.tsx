import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/data/campaigns";
import { toast } from "sonner";
import { Upload, Rocket } from "lucide-react";

const StartCampaign = () => {
  const [form, setForm] = useState({ title: "", category: "", goal: "", description: "", organizer: "", location: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.goal || !form.description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Campaign submitted for review! 🎉", {
      description: "Our team will review your campaign within 24 hours.",
    });
    setForm({ title: "", category: "", goal: "", description: "", organizer: "", location: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-muted py-12">
        <div className="container max-w-2xl text-center">
          <Rocket className="mx-auto h-10 w-10 text-primary mb-4" />
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Start Your Campaign</h1>
          <p className="mt-2 text-muted-foreground">Create a campaign and rally your community to make a difference.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Campaign Title *</Label>
              <Input id="title" placeholder="E.g., Build a School in Sylhet" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1.5" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Category *</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="goal">Fundraising Goal (৳) *</Label>
                <Input id="goal" type="number" placeholder="E.g., 500000" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} className="mt-1.5" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="organizer">Your Name</Label>
                <Input id="organizer" placeholder="Full name" value={form.organizer} onChange={(e) => setForm({ ...form, organizer: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="E.g., Dhaka, Sylhet" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="mt-1.5" />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Campaign Description *</Label>
              <Textarea id="description" placeholder="Tell your story. Why does this cause matter? How will funds be used?" rows={6} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1.5" />
            </div>

            <div className="rounded-lg border-2 border-dashed border-border p-8 text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Drag & drop images or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Rocket className="h-4 w-4" /> Submit Campaign
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StartCampaign;
