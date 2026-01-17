import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-3xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-red-600">
            Foodi <span className="text-blue-900">Brother's</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-black font-medium">
          <a href="#home" className="hover:text-red-600">Home</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#reservation" className="hover:text-red-600">Reservation</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-6 py-4 font-medium">
            <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
            <a href="#about" onClick={() => setShowMenu(false)}>About</a>
            <a href="#menu" onClick={() => setShowMenu(false)}>Menu</a>
            <a href="#reservation" onClick={() => setShowMenu(false)}>Reservation</a>
            <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
