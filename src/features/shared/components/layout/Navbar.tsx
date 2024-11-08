import React, { useState, useEffect } from "react";
import smallLogo from "@/assets/small-logo.png"; // Small logo after scroll
import largeLogo from "@/assets/logo-getgoing.png"; // Main logo
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 left-0 transition-all duration-300 ${
        scrolled ? "py-6" : ""
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between py-4 px-6 w-full ${
          scrolled ? "rounded-full bg-foreground/90 shadow-xl overflow-hidden" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center w-full gap-x-8">
          <button className="flex items-center" onClick={() => navigate("/")}>
            <img
              src={scrolled ? smallLogo : largeLogo}
              alt="Logo"
              width={scrolled ? 60 : 200}
              height={scrolled ? 60 : 60}
              className="transition-all duration-300"
            />
          </button>

          {/* Search bar */}
          <div className="md:flex items-center bg-white rounded-full hidden w-3/5 px-4 shadow-custom">
            <input
              type="text"
              placeholder="Cari negara, kota atau guide"
              className="flex-1 p-2 rounded-full focus:outline-none text-gray-700"
            />
            <button className="ml-3 bg-primary text-foreground rounded-full p-2">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 w-full justify-end">
          <a href="/" className="text-red-600 hover:text-red-800">
            Beranda
          </a>
          <a href="/guide" className="text-gray-700 hover:text-gray-900">
            Guide
          </a>
          <a href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </a>
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            t
          </div>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
