import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-teal-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-3 py-3">
   
        <Link to="/" className="flex items-center space-x-2">
          <img src="/Glogo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-indigo-400 font-trademark italic">
            Grom.Ilu Portfolio
          </span>
        </Link>


        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-indigo-300 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-300 transition">About</Link>
          <Link to="/projects" className="hover:text-indigo-300 transition">Projects</Link>
          <Link to="/certificate" className="hover:text-indigo-300 transition">Certificate</Link>
          <Link to="/contact" className="hover:text-indigo-300 transition">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800 text-lg">
          <Link to="/" className="block hover:text-indigo-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-indigo-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block hover:text-indigo-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/certificate" className="block hover:text-indigo-300" onClick={() => setIsOpen(false)}>Certificate</Link>
          <Link to="/contact" className="block hover:text-indigo-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
