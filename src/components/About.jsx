import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6">
          Daniel Orji, based in Nigeria, is a self-taught developer with a
          fervent passion for upcoming tech trends. Fascinated by the dynamic
          world of technology, he's driven to contribute and witness the amazing
          transformations it brings. In every project, he brings enthusiasm,
          dedication, and a strong work ethic. If you are seeking a developer
          who thrives in the ever-evolving tech landscape, values collaboration,
          and can turn concepts into impactful solutions, he is ready to
          contribute his skills and passion to your team. Let's build something
          extraordinary together.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
