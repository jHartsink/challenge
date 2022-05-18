/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import "../Styleguide/PageTwo.css";
import { useNav } from "../customHooks/useNav";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import Build from "../Images/buildTogether.svg";


function pageTwo() {
  const SecondPage = useNav("2");

  return (
    <section ref={SecondPage} id="pageTwo" className="pageTwo">
       <div className="logo-2" ><Logo /></div>
      <img className="Build" src={Build} alt="Build"></img>
    </section>
  );
}

export default pageTwo;
