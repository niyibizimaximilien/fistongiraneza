import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-foreground relative">
                <div className="absolute inset-0 w-[1.5px] h-full bg-foreground rotate-45 left-1/2 -translate-x-1/2" />
              </div>
              <span className="font-syne font-bold tracking-tight">NebulaCore</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clean tech solutions for businesses that want speed over noise.
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
            © {new Date().getFullYear()} NebulaCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
