import { ArrowRight, Github, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderAvatar from "@/assets/founder-avatar.png";
import avatarAisha from "@/assets/avatar-aisha.png";
import avatarDiego from "@/assets/avatar-diego.png";
import FloatingShapes from "@/components/FloatingShapes";

const team = [
  {
    name: "Maximilien Niyibizi",
    role: "Founder & CEO",
    bio: "Building products that scale — technical lead and founder.",
    avatar: founderAvatar,
    codes: {
      github: "https://github.com/niyibizimaximilien",
      linkedin: "#",
    },
  },
  {
    name: "Aisha Omari",
    role: "Lead Designer",
    bio: "Design systems, product UX and visual language.",
    avatar: avatarAisha,
    codes: { github: "#", linkedin: "#" },
  },
  {
    name: "Diego Ramos",
    role: "Senior Engineer",
    bio: "Backend systems, automation, and reliability.",
    avatar: avatarDiego,
    codes: { github: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <FloatingShapes />
        <div className="container-narrow relative z-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
              Our Team
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              People who build NebulaCore
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group p-8 bg-background border border-border rounded-2xl hover-lift hover-glow opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Avatar with hover effect */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-muted via-transparent to-muted rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-border group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.avatar}
                      alt={`${member.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-6">
                  {member.bio}
                </p>

                {/* Social & Action */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.codes.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.codes.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <Button asChild size="sm" variant="outline" className="ml-2">
                    <Link to="/contact">
                      Contact <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
