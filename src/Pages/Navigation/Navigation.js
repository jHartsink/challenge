import React from "react";
import NavigationLink from "./Navigationlink";
import { navLinks } from "./navLinks";
import "./nav.css";

export default function Navigation  ()  {
  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId, className }, index) => (
        <NavigationLink
          key={index}
          navLinkId={navLinkId}
          scrollToId={scrollToId}
          className={className}
        />
      ))}
    </nav>
  );
};


