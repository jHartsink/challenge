/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from "react";
import "../Styleguide/PageThree.css";
import { useNav } from "../customHooks/useNav";
import Vector from "../Images/Vector 2490.svg";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import {copy} from "../copy/copy.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function pageThree() {
  const vector = useRef();
  const [text] = useState(copy);
  const ThirdPage = useNav("3");

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let tl = gsap.timeline();
    if (vector.current) {
      tl.to(vector.current, {
        scrollTrigger: {
          start: "1900px",
          end: "1900px",
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
    <>
      <section ref={ThirdPage} id="pageThree" className=" pageThree">
        <div className="logo-3">
          <Logo />
        </div>
        <div className="container-3">
          {text.map((header, i) => (
            <>
              <h1 key={header.key} className="header-2">
                {header.headerTwo}
              </h1>
              <p className="copy-1">{header.copyOne}</p>
            </>
          ))}
        </div>
        <img ref={vector} className="vector-2" src={Vector} alt="vector"></img>
      </section>
    </>
  );
}

export default pageThree;
