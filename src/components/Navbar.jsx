export default function Navbar() {
  return (
    <div className="relative">
      <nav className="bg-cream p-4 fixed top-0 left-0 right-0 shadow-md">
        <div className="container">
          <div className="flex justify-between items-center mx-24">
            <a href="#" className="text-xl font-bold text-primary hover:text-secondary">
              Yoshua Joe Hadinata
            </a>
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
                <a href="#work" className="text-primary hover:text-secondary">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
