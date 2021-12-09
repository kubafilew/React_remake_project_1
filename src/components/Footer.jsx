import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="contact" class="contact-section">
        <div className="contact-section-header">
          <h2>Contact to Us below</h2>
          <p>Ask us for the details of the photo session</p>
        </div>
        <div className="contact-links">
          <a
            href="https://www.instagram.com/magnumphotos/"
            target="_blank"
            rel="noreferrer"
            class="btn contact-details">
            <i className="fa fa-instagram"></i> Instagram
          </a>
          <a
            id="profile-link"
            href="https://www.magnumphotos.com/"
            target="_blank"
            rel="noreferrer"
            class="btn contact-details">
            <i className="fab fa-github"></i> Official site
          </a>
          <a href="mailto: henri@magnum.com" class="btn contact-details">
            <i className="fas fa-at"></i> Mail
          </a>
          <a href="tel:111 222 333" class="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Mobile
          </a>
        </div>
      </section>
      <footer>
        <p className="creator">
          Unofficial Magnum Agency site, created by fans{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
