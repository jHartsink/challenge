import React, { useEffect, useRef } from "react";
import PageOne from "./page-one/PageOne";
import PageTwo from "./page-two/PageTwo";
import PageThree from "./page-three/PageThree";
import PageFour from "./page-four/PageFour";
import PageFive from "./page-five/PageFive";
import PageSix from "./page-six/PageSix";
import PageSeven from "./page-seven/PageSeven";
import Navigation from "./Navigation/Navigation";
import { ReactComponent as Art } from "../Images/Art.svg";
import { ReactComponent as ArtMobile } from "../Images/Art.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Main() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const svgDesktop = svgArt.current;
    let tl = gsap.timeline();
    tl.to(svgDesktop, {
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

  useEffect(() => {
    const svgMobile = art.current;
    let tl = gsap.timeline();
    tl.to(svgMobile, {
      y: "330vh",

      scrollTrigger: {
        markers: false,
        repeat: true,
        ease: "power2.easeIn",
        start: "3200px",
        end: "5000px",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);
  const svgArt = useRef(null);
  const art = useRef(null);

  return (
    <>
      <div className="svgArt" ref={svgArt}>
        <Art />
      </div>
      <div className="art" ref={art}>
        <ArtMobile width={"300px"} />
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
