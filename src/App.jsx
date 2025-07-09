import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import Landingpage from "./Components/Landingpage";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  // Animation for SVG intro
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.9,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  // Parallax mouse movement only when content shown
  useGSAP(() => {
    const main = document.querySelector(".main");

    if (main) {
      function handleMouseMove(e) {
        const xMovement = (e.clientX / window.innerWidth - 0.5) * 40;

        gsap.to(".text", {
          x: `${xMovement * 0.2}%`,
          ease: "power2.out",
        });

        gsap.to(".sky", {
          x: `${xMovement * 0.1}%`,
          ease: "power2.out",
        });

        gsap.to(".bg", {
          x: `${xMovement * 0.05}%`,
          ease: "power2.out",
        });
      }

      main.addEventListener("mousemove", handleMouseMove);

      return () => {
        main.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [showContent]);

  // Handle window resize to adjust any dynamic effects if needed
  useEffect(() => {
    function handleResize() {
      // We can later adjust canvas or other things here
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-black">
        <svg
          viewBox="0 0 900 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="clamp(100px, 25vw, 250px)"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && <Landingpage />}
    </>
  );
}

export default App;
