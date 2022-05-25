import React, { useState, useRef, useEffect } from "react";
import "./PageThree.css";
import { UseNav } from "../../customHooks/UseNav";
import Vector from "../../Images/Vector 2490.svg";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { Data } from "../../copy/copy.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function PageThree() {
  const vector = useRef();
  const [text] = useState(Data);
  const ThirdPage = UseNav("3");

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
          toggleActions: "play none none reset",
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
        <div className="container-page-3">
          {text.map((text) => (
            <>
              <h1 key={text.name}>{text.HeaderPageThree}</h1>
              <p className="copy-page-3">{text.CopyPageThree}</p>
            </>
          ))}
        </div>
        <img
          ref={vector}
          className="vector-page-3"
          src={Vector}
          alt="vector"
        ></img>
      </section>
    </>
  );
}

export default PageThree;
