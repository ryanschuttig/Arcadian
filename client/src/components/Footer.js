import React from "react";
import "./Footer.css"
var style = {
    backgroundColor: "black",
    borderTop: "2px solid #08F300",
    borderBottom: "2px solid #08F300",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%",
    color: "white"
}


function Footer() {
  return (
    <div style={style}>
      <p>If you would like to become a contributor, please contact:</p>
      <a href="https://github.com/Cholmes1994" target="_blank">Chris Holmes</a>
      
      <a href="https://www.ryanschuttig.com/" target="_blank">Ryan Schuttig</a>
    </div>
  );
}

export default Footer;
