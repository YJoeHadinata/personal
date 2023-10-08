import React, { useState } from "react";
import FadeUpAnimation from "../animations/FadeUpAnimation";

export default function Content() {
  const name = "Yoshua";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 my-20">
      {/* Hero Section Start */}
      <FadeUpAnimation>
        <section id="home" className="flex flex-col sm:flex-row items-center">
          <div className="flex-1 text-center sm:text-left">
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
              src="https://media.licdn.com/dms/image/D5635AQFIZVJt91-c-A/profile-framedphoto-shrink_400_400/0/1696282212835?e=1697385600&v=beta&t=mgZxeCQHl4Nwqq5QZBdMOfECLNQeqG-QJGcHMLwhnKA"
              className="w-full rounded-full"
              alt="Profile"
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
        </section>
      </FadeUpAnimation>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
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
              <a
                href="../assets/CV.pdf"
                className="text-cream"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <p className="mt-10 text-navy">Work History</p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kartu Pengalaman Kerja Pertama */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-primary">
            <h4 className="text-xl font-semibold">IT Support</h4>
            <p className="text-secondary">SMKN Negeri 1</p>
            <p className="text-secondary">April 2018</p>
            <ul className="text-secondary mt-3">
              <li>
                • Setting up local networks for computer-based national exams.
              </li>
              <li>• Maintaining school server connections for national exams.</li>
              <li>• Repairing and configuring school computers for lab use.</li>
            </ul>
          </div>

          {/* Kartu Pengalaman Kerja Kedua */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-primary">
            <h4 className="text-xl font-semibold">IT Support</h4>
            <p className="text-secondary">Artech Computer</p>
            <p className="text-secondary">Mei 2018 - Juni 2018</p>
            <ul className="text-secondary mt-3">
              <li>
                • Perform computer maintenance, and also repair computer
                hardware.
              </li>
              <li>• Building a local area network.</li>
              <li>• Repairing computer spare parts.</li>
            </ul>
          </div>

          {/* Kartu Pengalaman Kerja Ketiga */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-primary">
            <h4 className="text-xl font-semibold">IT Support</h4>
            <p className="text-secondary">DISKOMINFO Rangkasbitung</p>
            <p className="text-secondary">Januari 2019 - Maret 2019</p>
            <ul className="text-secondary mt-3">
              <li>
                • Responsible for carrying out computer maintenance and
                repairing computer hardware.
              </li>
              <li>• Responsible for managing agency documents.</li>
              <li>• Responsible for maintaining the equipment used.</li>
            </ul>
          </div>

          {/* Anda dapat menambahkan kartu-kartu pengalaman kerja tambahan di sini */}
        </div>
      </section>
      {/* Work Experiences Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="my-20">
        <div className="text-center">
          <h3 className="text-5xl font-sans font-bold underline decoration-primary">
            Contact Me
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {/* Contact Form */}
          <div>
            <h4 className="text-3xl font-semibold">Get in Touch</h4>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-xl text-navy">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md text-xl"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-xl text-navy">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md text-xl"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-xl text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded-md text-xl"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-cream py-3 px-6 rounded-md hover:bg-secondary transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h4 className="text-3xl font-semibold">Contact Information</h4>
            <ul className="mt-4 list-disc pl-6 sm:text-sm lg:text-xl md:text-sm xl:text-xl text-secondary">
              <li>Email: yoshuajoehadinata@gmail.com</li>
              <li>Phone: +62 812-8014-1510</li>
              <li>Address: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </div>
  );
}
