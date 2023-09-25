export default function Navbar() {
  return (
    <div className="relative">
      <nav className="bg-cream p-4 fixed top-0 left-0 right-0 shadow-md">
        <div className="container">
          <div className="flex justify-between items-center mx-20">
            <a href="#" className="text-xl font-bold text-primary hover:text-secondary">
              Yoshua Joe Hadinata
            </a>
            <ul className="flex space-x-12">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#work-experience" className="hover:underline">
                  Work Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
