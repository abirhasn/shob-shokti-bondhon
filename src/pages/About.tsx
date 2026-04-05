import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Shield, Eye, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "We believe in the power of community and empathy to drive meaningful change." },
  { icon: Shield, title: "Trust & Transparency", desc: "Every donation is tracked and campaign organizers are verified for your peace of mind." },
  { icon: Eye, title: "Accountability", desc: "Regular updates and impact reports ensure funds are used as intended." },
  { icon: Users, title: "Inclusivity", desc: "Anyone in Bangladesh can start or support a campaign — no barriers." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-hero py-16">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">About OrigoAid</h1>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/80">
            OrigoAid is Bangladesh's home-grown crowdfunding platform, connecting generous donors with impactful causes across all 64 districts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We started OrigoAid with a simple belief: the people of Bangladesh are generous, compassionate, and eager to help — they just need the right platform. From flood relief to education, healthcare to women's empowerment, OrigoAid makes it easy to create, discover, and fund campaigns that matter.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our platform supports bKash, Nagad, bank transfers, and card payments, making donations seamless for everyone. We verify every campaign organizer and provide transparent reporting so you always know where your money goes.
          </p>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-bold text-foreground mb-10">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-card border border-border p-6 text-center shadow-card">
                <v.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
