import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <h1 className="title">{props.children}</h1>
    <p>
      A Memory Game. Click on each Mickey once but don't any more than once.
    </p>
  </div>
);

export default Header;
