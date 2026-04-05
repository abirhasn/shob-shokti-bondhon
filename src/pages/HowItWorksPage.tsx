import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HowItWorks />
      <section className="py-16 text-center bg-background">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-foreground">Ready to Make a Difference?</h2>
          <p className="mt-2 text-muted-foreground">Start supporting causes or create your own campaign today.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/campaigns"><Button className="bg-primary text-primary-foreground gap-1">Browse Campaigns <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/start-campaign"><Button variant="outline">Start a Campaign</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
