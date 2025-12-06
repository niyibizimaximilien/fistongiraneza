import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "FreshMart",
    category: "E-commerce",
    description: "A clean, fast online grocery store with seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "TaskFlow",
    category: "Productivity App",
    description: "Minimal task management app for teams that value simplicity.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
  },
  {
    title: "HealthPulse",
    category: "Healthcare Dashboard",
    description: "Patient management system with intuitive data visualization.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
  {
    title: "PropView",
    category: "Real Estate",
    description: "Property listing platform with clean UI and advanced filtering.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "EduLearn",
    category: "EdTech",
    description: "Online learning platform with progress tracking and certifications.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
  {
    title: "PaySync",
    category: "Fintech",
    description: "Payment processing dashboard with real-time analytics.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 opacity-0 animate-fade-up">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "50ms" }}>
              Projects that speak for themselves
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              A selection of our recent work. Clean designs, functional builds, happy clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 75 + 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
