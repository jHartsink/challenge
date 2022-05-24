import React, { useState } from "react";
import { UseNav } from "../../customHooks/UseNav";
import "./PageFive.css";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { Data } from "../../copy/copy.js";

function PageFive() {
  const [text, setText] = useState(Data);
  const PageFive = UseNav("5");

  return (
    <section ref={PageFive} id="pageFive" className=" pageFive">
      <div className="logo-5">
        <Logo />
      </div>
      <div className="container-page-5">
        {text.map((text) => (
          <>
            <h1 key={text.name}>{text.HeaderPageFive}</h1>
            <p className="copy-page-5">{text.CopyPageFive}</p>
          </>
        ))}
      </div>
    </section>
  );
}
export default PageFive;
