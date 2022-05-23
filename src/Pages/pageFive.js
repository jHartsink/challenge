/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useNav } from "../customHooks/useNav";
import "../Styleguide/PageFive.css";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import {copy} from "../copy/copy.js";

function pageFive() {
  const [text] = useState(copy);
  const PageFive = useNav("5");

  return (
    <section ref={PageFive} id="pageFive" className=" pageFive">
       <div className="logo-5" ><Logo /></div>
      <div className="container-5">
        {text.map((header) => (
          <>
            <h1 key={header.name}>{header.headerFour}</h1>
            <p className="copy-3">{header.copyThree}</p>
          </>
        ))}
      </div>
    </section>
  );
}
export default pageFive;
