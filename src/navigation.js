import React from "react";

const Navigation = (props) => {
  const sections = ["Home", "About", "Contact", "Footer", "Header"];
  const navLinks = sections.map((section) => {
    return (
      <li>
        <a href={"#" + section}>{section}</a>
      </li>
    );
  });

  return <ul>{navLinks}</ul>;
};

export default Navigation;
