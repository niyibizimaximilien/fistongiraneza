import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50 bg-brand-gradient">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-c1 flex items-center justify-center ring-c2">
                <div className="w-[1px] h-3 bg-white rotate-45" />
              </div>
              <span className="font-syne font-bold tracking-tight text-c1">Fiston Giraneza</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UI/UX Designer | Industrial Design Student
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigate</h4>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>niyibizimaximilien@gmail.com</li>
              <li>+250794411286</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 — Designed by Fiston Giraneza
            <br />
            UI/UX Designer | Industrial Design Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
