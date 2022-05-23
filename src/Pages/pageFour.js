/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../Styleguide/PageFour.css";
import { useNav } from "../customHooks/useNav";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import {copy} from "../copy/copy.js";

function pageFour() {
  const [text] = useState(copy);
  const FourthPage = useNav("4");

  return (
    <section ref={FourthPage} id="pageFour" className="pageFour">
       <div className="logo-4" ><Logo /></div>
      <div className="container-4">
        {text.map((header) => (
          <>
            <h1 key={header.name}>{header.headerThree}</h1>
            <p className="copy-3">{header.copyTwo}</p>
          </>
        ))}
      </div>
    </section>
  );
}

export default pageFour;
