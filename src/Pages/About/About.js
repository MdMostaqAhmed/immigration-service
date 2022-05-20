import React from "react";
import profileImage from "../../../src/images/profile-pic.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="mx-auto w-25 about">
        <img src={profileImage} alt="" />
      </div>
      <p className="container mt-3">
        My name is Elina. To advise clients on how to comply with law and avoid
        noncompliance issues. A cardiologist uses specialized knowledge and
        techniques to evaluate heart health and prescribe appropriate behavior
        modification and medication to avoid future problems; a lawyer does the
        same with legal health. To advise clients so that legal documents will
        accomplish their goals, such as contracts, wills, and deeds. To assist
        clients when matters are in dispute to advocate for best results for the
        client. To provide the necessary specialized knowledge and experience to
        deal with criminal and regulatory inquiries, investigations, and
        prosecutions.
      </p>
      <p className="container mt-5">
        <strong>Contact Information</strong>
        <br />
        Jeffery Elina, <br />
        Toronto Immigration Lawyer 59 Berkeley St. Toronto, <br />
        Ontario, <br /> M5A 2W5 Tel: +1 (416) 944-3267 <br /> Fax:+1 (416)
        944-1675 info@matthewjeffery.com
      </p>
    </div>
  );
};

export default About;
