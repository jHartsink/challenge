
import React from "react";
import "./PageTwo.css";
import { UseNav } from "../../customHooks/UseNav";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import Build from "../../Images/buildTogether.svg";


function pageTwo() {
  const SecondPage = UseNav("2");

  return (
    <section ref={SecondPage} id="pageTwo" className="pageTwo">
       <div className="logo-2" ><Logo /></div>
      <img className="Build" src={Build} alt="Let's all build this brand together"></img>
    </section>
  );
}

export default pageTwo;
