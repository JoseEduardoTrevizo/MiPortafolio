import React from "react";
import instagram from "../../images/instagram-brands.svg";
import linkedin from "../../images/linkedin-brands.svg";
import git from "../../images/github-brands.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>Jose Eduardo Trevizo Pizano &copy; 2025</p>
        <div className="footer__social-media">
          <a href="https://www.linkedin.com/in/eduardo-trevizo-pizano/">
            <img src={linkedin} alt="Linked In" className="footer__linked" />
          </a>
          <a href="https://www.instagram.com/trevizopizano/">
            <img
              src={instagram}
              alt="Instagram"
              className="footer__instagram"
            />
          </a>
          <a href="https://github.com/JoseEduardoTrevizo">
            <img src={git} alt="Git Hub" className="footer__git" />
          </a>
        </div>
      </footer>
    </>
  );
}
