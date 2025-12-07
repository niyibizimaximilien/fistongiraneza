import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingShapes from "@/components/FloatingShapes";
import projectFreshmart from "@/assets/project-freshmart.png";
import projectTaskflow from "@/assets/project-taskflow.png";
import projectHealthpulse from "@/assets/project-healthpulse.png";
import projectPropview from "@/assets/project-propview.png";
import projectEdulearn from "@/assets/project-edulearn.png";
import projectPaysync from "@/assets/project-paysync.png";

const projects = [
  {
    title: "FreshMart",
    category: "E-commerce",
    description: "A clean, fast online grocery store with seamless checkout experience.",
    image: projectFreshmart,
  },
  {
    title: "TaskFlow",
    category: "Productivity App",
    description: "Minimal task management app for teams that value simplicity.",
    image: projectTaskflow,
  },
  {
    title: "HealthPulse",
    category: "Healthcare Dashboard",
    description: "Patient management system with intuitive data visualization.",
    image: projectHealthpulse,
  },
  {
    title: "PropView",
    category: "Real Estate",
    description: "Property listing platform with clean UI and advanced filtering.",
    image: projectPropview,
  },
  {
    title: "EduLearn",
    category: "EdTech",
    description: "Online learning platform with progress tracking and certifications.",
    image: projectEdulearn,
  },
  {
    title: "PaySync",
    category: "Fintech",
    description: "Payment processing dashboard with real-time analytics.",
    image: projectPaysync,
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <FloatingShapes />
        <div className="container-narrow relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase opacity-0 animate-fade-up">
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
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 75 + 150}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-secondary border border-border hover-glow">
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* View project badge */}
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20 flex items-center gap-2">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase">{project.category}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
