
import React, { useState } from "react";
import "./PageFour.css";
import { UseNav } from "../../customHooks/UseNav";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import {Data} from "../../copy/copy.js";

function PageFour() {
  const [text] = useState(Data);
  const FourthPage = UseNav("4");

  return (
    <section ref={FourthPage} id="pageFour" className="pageFour">
      <div className="logo-4">
        <Logo />
      </div>
      <div className="container-page-4">
        {text.map((text) => (
          <>
            <h1 key={text.name}>{text.HeaderPageFour}</h1>
            <p  className="copy-page-4">{text.CopyPageFour}</p>
          </>
        ))}
      </div>
    </section>
  );
}

export default PageFour;
