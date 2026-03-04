import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm font-medium tracking-wide">
            MC
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm transition-colors link-underline ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-body hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden pt-4 pb-2 space-y-3 border-t border-border mt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block text-sm transition-colors py-1 ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-body hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
