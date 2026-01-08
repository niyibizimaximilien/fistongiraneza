import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import founderAvatar from "@/assets/founder-avatar.png";

const FounderCard = () => {
  return (
    <div className="relative group">
      {/* Decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-mint-50/60 via-transparent to-mint-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative glass-effect rounded-2xl p-8 md:p-10 hover-glow">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar with decorative ring */}
          <div className="relative">
            <div className="absolute -inset-3 border border-border rounded-full animate-rotate-slow opacity-50" />
            <div className="absolute -inset-6 border border-border/30 rounded-full" />
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-border relative z-10">
              <img
                src={founderAvatar}
                alt="Maximilien Niyibizi - Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-mint-200 rounded-full border-4 border-background z-20" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-1">
                Founder & CEO
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-mint-700">Maximilien Niyibizi</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Building products that scale — leading product vision and technical direction at NebulaCore. 
              Passionate about empowering African businesses with accessible technology.
            </p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center md:justify-start gap-3 pt-4">
              <a 
                href="https://github.com/niyibizimaximilien" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-border hover:bg-mint-50 transition-colors group/link"
              >
                <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform group-hover:text-mint-700" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors group/link"
              >
                <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:hello@nebulacore.tech" 
                className="p-3 rounded-full border border-border hover:bg-muted transition-colors group/link"
              >
                <Mail className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
