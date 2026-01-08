import { Globe, Smartphone, Zap, Palette, Code, Settings } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description: "I design clean, modern interfaces that communicate clearly and look professional. Focus on layout, typography, color balance, and consistency.",
  },
  {
    icon: Globe,
    title: "UX Design",
    description: "Design with users in mind: journeys, interaction flows, accessibility, and clarity to make products easy to use.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Design",
    description: "Responsive experiences that feel native on each platform, ensuring consistency across devices.",
  },
  {
    icon: Zap,
    title: "Wireframing & Prototyping",
    description: "Low-fidelity wireframes and interactive prototypes to test concepts early and refine before development.",
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
              What I Do
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "50ms" }}>
              Services I offer
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              UI and UX design services focused on clarity, usability, and thoughtful interactions.
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
              { step: "01", title: "Understanding the Problem", description: "Define the problem and project goals; put the user's needs first." },
              { step: "02", title: "Research", description: "Analyze users, competitors, and patterns to find insights." },
              { step: "03", title: "Wireframing", description: "Low-fidelity wireframes to structure and test ideas quickly." },
              { step: "04", title: "UI Design", description: "High-fidelity interfaces with attention to detail and consistency." },
              { step: "05", title: "Prototyping", description: "Interactive prototypes to simulate real user interactions." },
              { step: "06", title: "Testing & Iteration", description: "Review, test, and refine designs based on feedback and usability." },
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
