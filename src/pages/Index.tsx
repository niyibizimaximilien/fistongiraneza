import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Zap,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import FounderCard from "@/components/FounderCard";
import founderAvatar from "@/assets/founder-avatar.png";

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
      <section className="section-padding relative overflow-hidden">
        <FloatingShapes />
        <div className="container-narrow relative z-10">
          <div className="md:grid md:grid-cols-5 md:items-center md:gap-12">
            <div className="md:col-span-3 space-y-8">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm opacity-0 animate-fade-up"
              >
                  <Sparkles className="w-4 h-4 text-c1" />
                <span className="text-sm font-medium text-c1">UI/UX Designer</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
                I design digital experiences that are clear, useful, and human-centered.
              </h1>
              <p
                className="text-lg md:text-xl text-c4 max-w-xl opacity-0 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                I’m Fiston Giraneza, a UI/UX Designer and Industrial Design student at the University of Rwanda, blending design thinking, usability, and aesthetics to create meaningful digital products.
              </p>
              <p className="text-base text-muted-foreground max-w-xl opacity-0 animate-fade-up" style={{ animationDelay: "250ms" }}>
                I focus on solving real problems through research-driven design and clean interfaces.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <Button asChild size="lg" variant="brand" className="group">
                  <Link to="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Let’s Collaborate</Link>
                </Button>
              </div>
            </div>

            {/* Hero Avatar */}
            <div className="md:col-span-2 mt-12 md:mt-0 flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: "400ms" }}>
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-4 border border-border/50 rounded-full animate-pulse-glow" />
                <div className="absolute -inset-8 border border-border/30 rounded-full" />
                <div className="absolute -inset-12 border border-border/20 rounded-full animate-rotate-slow" style={{ animationDuration: "30s" }} />
                
                {/* Avatar */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border shadow-2xl">
                  <img
                    src={founderAvatar}
                    alt="Fiston Giraneza"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-background border border-border rounded-full shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap text-c1">Fiston Giraneza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/50 relative">
        <div className="container-narrow">
          <div className="mb-12">
            <p className="text-sm font-medium text-c1 mb-2">
              What I Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-c1">
              Designing clear, human-centered digital experiences.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-background border border-border rounded-xl hover-lift hover-glow opacity-0 animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-c3 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon
                    className="h-6 w-6 text-c1"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-c1">{service.title}</h3>
                <p className="text-sm text-c4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-medium link-underline text-c1"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                I design products that feel natural and useful.
              </h2>
              <p className="text-c4 leading-relaxed">
                My work focuses on system thinking, usability, and visual clarity — turning ideas into thoughtful, user-centered solutions.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border border-border flex items-center justify-center animate-morph">
                  <div className="w-48 h-48 rounded-full border border-border flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-c4 flex items-center justify-center shadow-2xl">
                      <div className="w-[2px] h-16 bg-c3 rotate-45" />
                    </div>
                  </div>
                </div>
                {/* Orbiting dot */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-c4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-c1 mb-2 tracking-wider uppercase">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Fiston Giraneza — UI/UX Designer
            </h2>
          </div>
          <FounderCard />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-700 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container-narrow text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            I’m open to collaborations, internships, and design projects. If you have an idea or a problem to solve, let’s talk.
          </p>
          <Button asChild size="lg" variant="brand" className="group">
            <Link to="/contact">
              Let’s Collaborate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
