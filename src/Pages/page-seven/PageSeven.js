
import React, { useState } from "react";
import { UseNav } from "../../customHooks/UseNav";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import "./PageSeven.css";
import {Data} from "../../copy/copy.js";

function PageSeven() {
  const [text] = useState(Data);
  const PageSeven = UseNav("7");

  return (
    <section ref={PageSeven} id="pageSeven" className=" pageSeven">
      <div className="logo-7">
        <Logo />
      </div>
      <div className="container-page-7">
        {text.map((text) => (
          <>
            <h1 key={text.name}>{text.HeaderPageSeven}</h1>
            <p className="copy-page-7">{text.CopyPageSeven}</p>
          </>
        ))}
      </div>
    </section>
  );
}
export default PageSeven;
