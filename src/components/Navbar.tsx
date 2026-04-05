import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="OrigoAid" className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/campaigns" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Campaigns</Link>
          <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">How It Works</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
          <Link to="/start-campaign">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start a Campaign</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/campaigns" className="text-sm font-medium" onClick={() => setOpen(false)}>Campaigns</Link>
            <Link to="/how-it-works" className="text-sm font-medium" onClick={() => setOpen(false)}>How It Works</Link>
            <Link to="/about" className="text-sm font-medium" onClick={() => setOpen(false)}>About</Link>
            <Link to="/start-campaign" onClick={() => setOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">Start a Campaign</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
