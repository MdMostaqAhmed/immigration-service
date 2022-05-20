import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mt-5 text-center container">
      <p>
        <small> &copy; {year} Capital immigration. All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
