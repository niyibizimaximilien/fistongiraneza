import { Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-c1 mb-4 opacity-0 animate-fade-up">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-up gradient-c-text" style={{ animationDelay: "50ms" }}>
              My name is Fiston Giraneza
            </h1>
            <p className="text-lg text-c4 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              My name is Fiston Giraneza, a UI/UX designer currently studying Industrial Design at the University of Rwanda, where I began my academic journey in November 2025.
            </p>
            <p className="text-lg text-c4 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
              My passion for design comes from understanding how people interact with products — not just how they look, but how they work. Studying industrial design has shaped the way I approach digital experiences: I think in systems, usability, form, and function.
            </p>
            <p className="text-lg text-c4 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              I believe good design should feel natural. If users have to think too hard, something is wrong. My goal is to create interfaces that guide users smoothly, reduce friction, and communicate clearly.
            </p>
            <p className="text-lg text-c4 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "250ms" }}>
              As a growing designer, I’m constantly learning, experimenting, and improving — turning ideas into thoughtful, user-centered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-6">My Design Philosophy</h2>
          <div className="max-w-2xl text-c4 leading-relaxed">
            <p className="mb-4">I believe design should be simple, intentional, and user-focused. Every design decision should have a reason — whether it’s a color choice, layout, or interaction. I aim to create experiences that feel natural, efficient, and meaningful.</p>
            <p>Design choices should be backed by research and logic; usability and clarity are the highest priorities in my process.</p>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-c1">Why Work With Me</h2>
            <div className="space-y-6 text-c4 leading-relaxed">
              <ul className="list-disc list-inside text-left inline-block">
                <li><strong>Strong user-centered mindset</strong></li>
                <li><strong>Clean and modern design style</strong></li>
                <li><strong>Attention to detail</strong></li>
                <li><strong>Clear communication</strong></li>
                <li><strong>Continuous learning and improvement</strong></li>
                <li><strong>Designs backed by logic, not guesswork</strong></li>
              </ul>
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
                <h3 className="text-xl font-semibold mb-3 text-c1">{value.title}</h3>
                <p className="text-sm text-c4">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
