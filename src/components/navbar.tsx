import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/q1.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Strip */}
      <div className="bg-[#335F90] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
            <span>Hitanlifesciences@yahoo.com</span>
            <span className="hidden sm:block text-white/60">|</span>
            <span>+91 72176 38558</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-[#F8F6F2] border-b border-[#C6A25B]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Hitan Life Sciences"
                className="h-24 md:h-28 w-auto object-contain -ml-3 md:ml-0"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#335F90] border-b-2 border-[#335F90] pb-1"
                        : "text-[#2D3748] hover:text-[#335F90]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="
                  bg-[#0E2A47]
                  hover:bg-[#16385B]
                  text-white
                  px-5
                  py-2.5
                  rounded-lg
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#0E2A47] text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#C6A25B]/20 bg-[#F8F6F2]">
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2 font-medium transition-colors ${
                      isActive
                        ? "text-[#335F90]"
                        : "text-[#2D3748] hover:text-[#335F90]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-3
                  bg-[#0E2A47]
                  hover:bg-[#16385B]
                  text-white
                  text-center
                  py-3
                  rounded-lg
                  font-medium
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
