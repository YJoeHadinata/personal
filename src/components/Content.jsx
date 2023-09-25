import cv from "../assets/CV.pdf";
import { motion } from "framer-motion";

export default function Content() {
  const name = "Yoshua";
  return (
    <>
      {/* Hero Section Start */}
      <section
        id="home"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-20"
      >
        <div className="container flex flex-col sm:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold">
              I&apos;m
              <span className="underline decoration-primary">{name}</span>
            </h1>
            <p className="text-xl sm:text-2xl my-5 text-navy opacity-75">
              Freelance Web & Mobile UI/UX
              <br /> Designer
            </p>
          </div>

          <div className="w-full sm:w-1/2">
            <img
              src="https://dlmak.droitlab.com/wp-content/uploads/2023/05/hero_img-1.png"
              className="w-full"
            />
            <div className="absolute bottom-0 left-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#D9832C"
                  d="M29,-42.6C42.7,-42.4,62.4,-44.9,70.4,-38.2C78.5,-31.6,75,-15.8,72,-1.8C68.9,12.3,66.4,24.6,61.1,36C55.8,47.5,47.8,58.2,37.2,67.4C26.5,76.7,13.3,84.4,-0.5,85.4C-14.3,86.3,-28.7,80.4,-35.5,69C-42.4,57.6,-41.8,40.7,-47.7,28.3C-53.6,15.8,-66.1,7.9,-68.1,-1.1C-70.1,-10.2,-61.6,-20.4,-52.6,-27.6C-43.6,-34.7,-34.1,-38.7,-25.3,-41.7C-16.4,-44.7,-8.2,-46.8,-0.3,-46.3C7.7,-45.8,15.4,-42.9,29,-42.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section Start */}

      {/* About Section Start */}
      <section
        id="about"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-20"
      >
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-5xl font-sans font-bold underline decoration-primary inline-flex">
              About Me
            </h3>
          </div>
          <div className="text-justify sm:text-justify">
            <p className="text-secondary">
              Yoshua Joe Hadinata is an Informatics Engineering fresh graduate
              from University Bina Nusantara (BINUS). He is proficient in
              website builder, ui/ux, and programming languages like html, css,
              javascript, laravel, and tailwindcss. With a passion for
              problem-solving, Yoshua is dedicated to delivering high-quality
              results and continuously improving UI/UX expertise.
            </p>
            <button className="bg-primary p-3 rounded-md my-4 hover:bg-secondary transition duration-300 ease-in-out">
              <a href={cv} className="text-cream">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Work Experiences Section Start */}
      <section
        id="work"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-10"
      >
        <div className="text-center">
          <h3 className="text-5xl font-sans font-bold underline decoration-primary">
            Work Experiences
          </h3>
          <p className="mt-10 text-navy">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus
          </p>
        </div>
        <div className="grid gap-4 grid-cols-3">
          <div className="card hover:bg-primary p-10 rounded-sm hover:text-cream shadow-md ransition duration-700 ease-in-out hover:translate-y-6">
            <div className="cardBody">
              <p className="text-sm opacity-70">Arpil 2018</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">SMKN Negeri 1</p>
              <ul className="text-xs mt-5 opacity-70">
                <li>
                  • Setting up local networks for computer-based national exams.
                </li>
                <li>
                  • Maintaining school server connections for national exams.
                </li>
                <li>
                  • Repairing and configuring school computers for lab use.
                </li>
              </ul>
            </div>
          </div>

          <div className="card hover:bg-primary p-10 rounded-sm hover:text-cream shadow-md ransition duration-700 ease-in-out hover:translate-y-6">
            <div className="cardBody">
              <p className="text-sm opacity-70">Mei 2018 - Juni 2018</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">Artech Computer</p>
              <ul className="text-xs mt-5 opacity-70">
                <li>
                  • Perform computer maintenance, and also repair computer
                  hardware.
                </li>
                <li>• Building a local area network.</li>
                <li>• Repairing computer spare parts.</li>
              </ul>
            </div>
          </div>

          <div className="card hover:bg-primary p-10 rounded-sm hover:text-cream shadow-md transition duration-700 ease-in-out hover:translate-y-6">
            <div className="cardBody">
              <p className="text-sm opacity-70">Jan 2019 - Maret 2019</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">DISKOMINFO Rangkasbitung</p>
              <ul className="text-xs mt-5 opacity-70">
                <li>
                  • Responsible for carrying out computer maintenance and
                  repairing computer hardware.
                </li>
                <li>• Responsible for managing agency documents.</li>
                <li>• Responsible for maintaining the equipment used.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Work Experiences Section End */}

      {/* Contact Section Start */}
      <section
        id="contact"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-20"
      >
        <div className="text-center">
          <h3 className="text-5xl font-sans font-bold underline decoration-primary">
            Contact Me
          </h3>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
}
