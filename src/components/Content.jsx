export default function Content() {
  const name = "Yoshua";
  return (
    <>
      {/* Hero Section Start */}
      <section
        id="home"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-20"
      >
        {" "}
        <div className="container flex flex-col sm:flex-row items-center">
          {" "}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold">
              {" "}
              I&apos;m{" "}
              <span className="underline decoration-primary">{name}</span>
            </h1>
            <p className="text-xl sm:text-2xl my-5 text-navy opacity-75">
              Freelance Web & Mobile UI/UX
              <br /> Designer
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            {" "}
            <img
              src="https://dlmak.droitlab.com/wp-content/uploads/2023/05/hero_img-1.png"
              className="w-full"
            />{" "}
          </div>
        </div>
      </section>
      {/* Hero Section Start */}

      {/* About Section Start */}
      <section
        id="about"
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 my-20"
      >
        <div className="container flex flex-col sm:flex-row items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            {" "}
            <h3 className="text-5xl font-sans font-bold underline decoration-primary">
              About Me
            </h3>
          </div>

          <div className="text-justify sm:text-justify ml-0 sm:ml-32 container mx-10">
            {" "}
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-secondary">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
            </p>
            <button className="bg-primary p-3 rounded-md my-4 hover:bg-secondary transition duration-300 ease-in-out">
              <a href="#" className="text-cream">
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
              <p className="text-sm opacity-70">June 2012</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">Adobe Inc.</p>
              <p className="mt-5 text-justify opacity-70">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="card hover:bg-primary p-10 rounded-sm hover:text-cream shadow-md ransition duration-700 ease-in-out hover:translate-y-6">
            <div className="cardBody">
              <p className="text-sm opacity-70">June 2012</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">Adobe Inc.</p>
              <p className="mt-5 text-justify opacity-70">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="card hover:bg-primary p-10 rounded-sm hover:text-cream shadow-md transition duration-700 ease-in-out hover:translate-y-6">
            <div className="cardBody">
              <p className="text-sm opacity-70">June 2012</p>
              <h5 className="text-2xl font-semibold my-1">IT Support</h5>
              <p className="opacity-70">Adobe Inc.</p>
              <p className="mt-5 text-justify opacity-70">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
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
