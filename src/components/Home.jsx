import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-[0.6rem] sm:text-[1rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl pt-6 sm:pt-3 sm:text-7xl font-semibold sm:font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 pt-1 pb-4 max-w-md flex-wrap sm:py-5 text-[0.72rem] sm:text-[1.3rem]">
            Passionate about frontend development, I thrive on crafting dynamic
            and intuitive web applications. My love for modern technologies
            drives me to create engaging user experiences. Let's build the
            future of the web together!
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-[0.8rem] sm:text-[1rem]"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
