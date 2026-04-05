import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="OrigoAid" className="h-9 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Bangladesh's trusted crowdfunding platform. Empowering communities, one campaign at a time.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Platform</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/campaigns" className="hover:text-foreground transition-colors">Browse Campaigns</Link>
              <Link to="/start-campaign" className="hover:text-foreground transition-colors">Start a Campaign</Link>
              <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">FAQs</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Email"].map((label) => (
                <a key={label} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-bold">
                  {label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 OrigoAid. All rights reserved. Made with <Heart className="inline h-3 w-3 text-destructive fill-destructive" /> in Bangladesh.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
