import React from "react";
import About from "./About";

function Landingpage() {
  return (
    <>
      <div className="main w-full overflow-x-hidden">
        <div className="landing relative w-full h-screen bg-black">
          <nav className="absolute top-0 left-0 z-50 w-full flex justify-between items-center px-6 py-4">
            <div className="logo flex items-center gap-2">
              <div className="lines flex flex-col">
                <div className="line w-7 h-[2px] bg-white mb-1"></div>
                <div className="line w-4 h-[2px] bg-white mb-1"></div>
                <div className="line w-2 h-[2px] bg-white"></div>
              </div>
              <div className="text-lg sm:text-xl text-white ">Rockstar</div>
            </div>
          </nav>

          <div className=" sky images-container relative w-full h-full">
            <img
              src="./sky.png"
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Sky background"
            />
            <img
              src="./bg.png"
              className="bg absolute top-0 left-0 w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute left-1/2 top-1/2 md:top-60 md:left-[49%] flex flex-col items-center gap-1  text-white -translate-x-1/2 -translate-y-1/2 font-light">
              <h1 className="text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                grand
              </h1>
              <h1 className="text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                theft
              </h1>
              <h1 className="text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                auto
              </h1>
            </div>
            <img
              src="./man.png"
              alt="Character"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[420px]"
            />
          </div>

          <div className="bottom-section absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center justify-center gap-2 text-white">
              <i className="text-xl ri-arrow-down-line"></i>
              <h3 className="text-sm sm:text-base font-[Corbel]">
                Scroll Down
              </h3>
            </div>
            <img
              src="./ps5.png"
              alt="PS5 logo"
              className="h-10 sm:h-12 mx-auto mt-4"
            />
          </div>

          <About />
        </div>
      </div>
    </>
  );
}

export default Landingpage;
