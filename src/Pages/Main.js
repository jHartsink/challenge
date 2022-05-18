import React, { useEffect, useRef } from "react";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import PageThree from "./pageThree";
import PageFour from "./pageFour";
import PageFive from "./pageFive";
import PageSix from "./pageSix";
import PageSeven from "./pageSeven";
import Navigation from "./Navigation/Navigation";
import { ReactComponent as Art } from "../Images/Art.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Main() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = svgArt.current;
    let tl = gsap.timeline();
    tl.to(el, {
      y: "290vh",

      scrollTrigger: {
        markers: false,
        repeat: true,
        ease: "power2.easeIn",
        start: "2500px",
        end: "6500px",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);
  const svgArt = useRef(null);

  return (
    <>
      <div className="svgArt" ref={svgArt}>
        <Art />
      </div>
      <Navigation />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
    </>
  );
}

export default Main;
