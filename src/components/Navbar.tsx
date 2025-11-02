import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Company LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Teknologi", path: "/technology" },
    { name: "Keberlanjutan", path: "/sustainability" },
    { name: "Tim Kami", path: "/team" },
    { name: "Mitra & Berita", path: "/partners" },
    { name: "Karir", path: "/careers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="AETHERA Energy" className="h-16 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                  isActive(item.path)
                    ? "text-primary bg-accent after:scale-x-100"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">Hubungi Kami</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:translate-x-2 animate-slide-in-right ${
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2 transition-all duration-300 hover:scale-105">Hubungi Kami</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
