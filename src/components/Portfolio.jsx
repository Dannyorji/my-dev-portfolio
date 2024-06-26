import React from "react";
import foodRepublic from "../assets/portfolio/foodRepublic.jpg";
import PCRecommender from "../assets/portfolio/PCrecommender.jpg";
import Quizapp from "../assets/portfolio/Quizapp.jpg";
import ShoppingCart from "../assets/portfolio/ShoppingCart.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: foodRepublic,
      demoLink: "http://foodrepublic-rp.netlify.app/",
      codeLink: "https://github.com/Dannyorji/foodRepublic",
    },
    {
      id: 2,
      src: PCRecommender,
      demoLink: "https://pcrecommender.netlify.app/",
      codeLink: "https://github.com/Dannyorji/pc-recommender",
    },
    {
      id: 3,
      src: Quizapp,
      demoLink: "https://pub-quiz-app-two.vercel.app/",
      codeLink: "https://github.com/Dannyorji/Pub-quiz-app",
    },
    {
      id: 4,
      src: ShoppingCart,
      demoLink: "https://shopping-cart-rt.netlify.app/",
      codeLink: "https://github.com/Dannyorji/shopping-cart-app",
    },
  ];

  const redirectToDemo = (demoLink) => {
    window.location.href = demoLink;
  };

  const redirectToCode = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => redirectToDemo(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => redirectToCode(codeLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
