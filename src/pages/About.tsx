import { Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-up">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "50ms" }}>
              We believe in the power of simplicity.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              NebulaCore is a modern tech studio focused on crafting simple, efficient digital 
              solutions. We cut the noise and deliver products that just work fast, responsive, 
              and scalable. No clutter, no over-engineered features, just clean tech for everyday 
              business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify tech for businesses by delivering clean, efficient digital tools 
                that empower growth without the complexity.
              </p>
            </div>

            <div className="space-y-4 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Empower Africa's small and growing businesses with accessible technology 
                that levels the playing field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Minimal */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why minimal tech matters</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In a world overflowing with bloated software and unnecessary features, we take 
                the opposite approach. Every line of code we write serves a purpose.
              </p>
              <p>
                Minimal doesn't mean lacking it means focused. It means faster load times, 
                easier maintenance, lower costs, and better user experiences.
              </p>
              <p>
                We believe that the best technology is the kind you don't have to think about. 
                It just works, seamlessly and reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Simplicity", description: "Less is more. We strip away the unnecessary." },
              { title: "Speed", description: "Fast delivery without compromising quality." },
              { title: "Clarity", description: "Clear communication, transparent processes." },
            ].map((value, index) => (
              <div 
                key={value.title} 
                className="text-center p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100 + 250}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
