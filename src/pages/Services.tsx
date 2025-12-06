import { Globe, Smartphone, Zap, Palette, Code, Settings } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built for speed, clarity, and conversion. From landing pages to full-scale web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Intuitive mobile app interfaces that users love. Clean, functional designs for iOS and Android.",
  },
  {
    icon: Zap,
    title: "System Automation",
    description: "Automate repetitive tasks with Google Scripts, custom dashboards, and workflow integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality. Clean interfaces that convert.",
  },
  {
    icon: Code,
    title: "API Development",
    description: "Robust, well-documented APIs that power your applications and enable seamless integrations.",
  },
  {
    icon: Settings,
    title: "Tech Consulting",
    description: "Strategic guidance on technology choices, architecture decisions, and digital transformation.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-up">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "50ms" }}>
              What we build
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Simple, efficient digital solutions tailored to your business needs. 
              No fluff, just tools that work.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 border border-border rounded-lg hover-lift bg-background opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 75 + 150}ms` }}
              >
                <service.icon className="h-10 w-10 mb-6 text-foreground" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-12 text-center">How we work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understand your needs and goals" },
              { step: "02", title: "Design", description: "Create clean, functional designs" },
              { step: "03", title: "Build", description: "Develop with precision and care" },
              { step: "04", title: "Launch", description: "Deploy and support your solution" },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="text-4xl font-bold text-muted-foreground/30 mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
