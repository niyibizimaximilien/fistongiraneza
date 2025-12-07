import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Maximilien Niyibizi",
    role: "Founder & CEO",
    bio: "Building products that scale — technical lead and founder.",
    codes: {
      github: "https://github.com/niyibizimaximilien",
      linkedin: "#",
    },
  },
  {
    name: "Aisha Omari",
    role: "Lead Designer",
    bio: "Design systems, product UX and visual language.",
    codes: { github: "#", linkedin: "#" },
  },
  {
    name: "Diego Ramos",
    role: "Senior Engineer",
    bio: "Backend systems, automation, and reliability.",
    codes: { github: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Our Team
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">
              People who build NebulaCore
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-background border border-border rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted-foreground flex items-center justify-center">
                    <img
                      src="/owner.svg"
                      alt={`${member.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={member.codes.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <a
                    href={member.codes.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                  <Button asChild size="sm" variant="ghost" className="ml-auto">
                    <Link to="/contact">
                      Contact <ArrowRight className="ml-2 h-4 w-4" />
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
