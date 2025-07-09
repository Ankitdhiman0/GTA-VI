import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-4 py-10 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-[80vh] mb-8 md:mb-0 flex-shrink-0">
        <img
          className="w-full h-full object-contain scale-[2] translate-x-5 md:translate-x-0 md:scale-[1.2] rounded-lg shadow-lg"
          src="./imag.png"
          alt="GTA VI"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">Grand Theft Auto</h1>
          <pre className="font-[pricedown] text-5xl sm:text-6xl md:text-7xl text-yellow-500">
            {" "}
            VI
          </pre>
        </div>

        <p className="text-lg sm:text-xl mt-6 font-[Corbel] font-light">
          Step into a new era of open-world adventures with GTA VI. Explore a
          vibrant city, live thrilling stories, and shape your legend.
        </p>

        <p className="text-lg sm:text-xl mt-4 font-[Corbel] font-light">
          Immerse yourself in breathtaking visuals, cinematic missions, and a
          living, dynamic world that evolves with your choices.
        </p>

        <p className="text-lg sm:text-xl mt-4 font-[Corbel] font-light">
          Experience freedom like never before. Your story, your rules. Are you
          ready to rule the streets?
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 transition-all w-48 mt-8 mx-auto md:mx-0 rounded-full px-6 py-3 text-black text-lg  shadow-md">
          Download Now
        </button>
      </div>
    </div>
  );
}

export default About;
