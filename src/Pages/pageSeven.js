/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useNav } from "../customHooks/useNav";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import "../Styleguide/PageSeven.css";
import {copy} from "../copy/copy.js";

function pageSeven() {
  const [text] = useState(copy);
  const PageSeven = useNav("7");

  return (
    <section ref={PageSeven} id="pageSeven" className=" pageSeven">
       <div className="logo-7" ><Logo /></div>
      <div className="container-7">
        {text.map((header) => (
          <>
            <h1 key={header.name}>{header.headerSix}</h1>
            <p className="copy-4">{header.copyFive}</p>
          </>
        ))}
      </div>
    </section>
  );
}
export default pageSeven;
