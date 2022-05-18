import React, { useRef, useState, useEffect } from "react";
import "../Styleguide/Pages.css";
import "../Styleguide/PageOne.css";
import { useNav } from "../customHooks/useNav";
import Vector from "../Images/Vector 2490.svg";
import copy from "../copy/copy.js";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import gsap from "gsap";

function PageOne() {
  const section = useRef();
  const vector = useRef();
  const [text] = useState(copy);
  const FirstPage = useNav("1");

  useEffect(() => {
    if (section.current) {
      gsap.to(section.current, {
        delay: 1,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  });
  useEffect(() => {
    if (vector.current) {
      gsap.to(vector.current, {
        delay: 1.5,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <>
      <section ref={FirstPage} id="pageOne" className="pageOne">
        <div className="logo">
          <Logo />
        </div>
        <div ref={section} className="container-1">
          {text.map((header) => (
            <h1 key={header.name} className="header">
              {header.headerOne}
            </h1>
          ))}
        </div>
        <img ref={vector} className="vector" src={Vector} alt="vector"></img>
      </section>
    </>
  );
}
export default PageOne;
