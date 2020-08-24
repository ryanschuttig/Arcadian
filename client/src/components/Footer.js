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
      <p>If you want to become a contributor please contact us on Github!</p>
      <a href="https://github.com/Cholmes1994" target="_blank">Chris Holmes</a>
      
      <a href="https://github.com/ryanschuttig" target="_blank">Ryan Schuttig</a>
    </div>
  );
}

export default Footer;
