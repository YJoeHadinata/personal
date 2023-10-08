import cv from "../assets/CV.pdf";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-cream p-4 fixed top-0 left-0 right-0 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-primary hover:text-secondary">
              Yoshua Joe Hadinata
            </a>
            <div className="hidden sm:block"> {/* Tampilan desktop */}
              <ul className="flex space-x-12 font-semibold">
                <li>
                  <a href="#home" className="text-primary hover:text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary hover:text-secondary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:text-secondary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-primary hover:text-secondary">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href={cv} className="text-primary hover:text-secondary">
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:hidden"> {/* Tampilan mobile */}
              <button
                onClick={toggleMenu}
                className="text-xl text-primary hover:text-secondary focus:outline-none"
              >
                ☰ {/* Tambahkan ikon hamburger di sini */}
              </button>
              {isOpen && (
                <div className="absolute top-16 right-4 bg-cream p-4 shadow-md">
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <a href="#home" className="text-primary hover:text-secondary">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="text-primary hover:text-secondary">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-primary hover:text-secondary">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#work" className="text-primary hover:text-secondary">
                        Work Experience
                      </a>
                    </li>
                    <li>
                      <a href={cv} className="text-primary hover:text-secondary">
                        Download CV
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
