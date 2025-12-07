import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Zap,
  Palette,
  Code,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, responsive sites that convert.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Intuitive apps for everyday use.",
  },
  {
    icon: Zap,
    title: "System Automation",
    description: "Automate the boring stuff.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-8 max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] opacity-0 animate-fade-up">
                Build smarter.
                <br />
                Scale faster.
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                Clean tech solutions for businesses that want speed over noise.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Owner avatar near hero text (right column on md+) */}
            <div className="mt-6 md:mt-0 flex items-start md:justify-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border border-border shadow-sm">
                  <img
                    src="/owner.svg"
                    alt="Company owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium">Maximilien Niyibizi</p>
                <p className="text-xs text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <div className="mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Simple solutions, real results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-background border border-border rounded-lg hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <service.icon
                  className="h-8 w-8 mb-4 text-foreground"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-medium link-underline"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                We cut the noise and deliver products that just work.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                NebulaCore is a modern tech studio focused on crafting simple,
                efficient digital solutions. Fast, responsive, and scalable — no
                clutter, no over-engineered features.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full border border-border flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-border flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-foreground flex items-center justify-center">
                    <div className="w-[2px] h-16 bg-background rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Owner / Company Lead */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Company Owner
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border border-border">
                <img
                  src="/owner.svg"
                  alt="Company owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Maximilien Niyibizi</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Founder & CEO — leading product vision and technical direction
                at NebulaCore.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something great?
          </h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Let's create clean, efficient digital solutions for your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link to="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
