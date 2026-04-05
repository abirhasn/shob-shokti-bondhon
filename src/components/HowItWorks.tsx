import { Search, CreditCard, Heart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Cause",
    description: "Browse campaigns across Bangladesh — education, healthcare, disaster relief, and more.",
  },
  {
    icon: CreditCard,
    title: "Donate Securely",
    description: "Contribute any amount via bKash, Nagad, bank transfer, or card. Every taka matters.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Follow campaign updates and see exactly how your donation is making an impact.",
  },
  {
    icon: Heart,
    title: "Share & Inspire",
    description: "Spread the word on social media and inspire others to join the movement.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Simple & Transparent</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">How OrigoAid Works</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
