
import React, { useState, useRef ,useEffect } from "react";
import { UseNav } from "../../customHooks/UseNav";
import "./PageSix.css";
import Vector from "../../Images/Vector 2490.svg";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import {Data} from "../../copy/copy.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function PageSix() {
  const vector = useRef()
  const [text] = useState(Data);
  const PageSix = UseNav("6");

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
      <div className="container-page-6">
        {text.map((text) => (
          <>
            <h1 key={text.name}>{text.HeaderPageSix}</h1>
            <p  className="copy-page-6">{text.CopyPageSix}</p>
          </>
        ))}
      </div>
      <img ref = {vector}className="vector-page-6" src={Vector} alt="vector"></img>
    </section>
  );
}

export default PageSix;
