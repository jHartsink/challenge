/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef ,useEffect } from "react";
import { useNav } from "../customHooks/useNav";
import "../Styleguide/PageSix.css";
import Vector from "../Images/Vector 2490.svg";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import copy from "../copy/copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function pageSix() {
  const vector = useRef()
  const [text] = useState(copy);
  const PageSix = useNav("6");

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let tl = gsap.timeline();
    if (vector.current) {
      tl.to(vector.current, {
        scrollTrigger: {
          start: "4900px",
          end: "4900px",
          markers: false,
          ease: "power2.easeIn",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <section ref={PageSix} id="pageSix" className=" pageSix">
      <div className="logo-6" ><Logo /></div>
      <div className="container-6">
        {text.map((header) => (
          <>
            <h1 key={header.name}>{header.headerFive}</h1>
            <p className="copy-4">{header.copyFour}</p>
          </>
        ))}
      </div>
      <img ref = {vector}className="vector-3" src={Vector} alt="vector"></img>
    </section>
  );
}

export default pageSix;
