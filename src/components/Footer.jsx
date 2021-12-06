import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Below You can find my profiles and personal contact.</h2>
          <p>Is there anything I can help you with?</p>
        </div>
        <div class="contact-links">
          <a
            href="https://www.instagram.com/magnumphotos/"
            target="_blank"
            rel="noreferrer"
            class="btn contact-details">
            <i class="fa fa-instagram"></i> Insta
          </a>
          <a
            id="profile-link"
            href="https://www.magnumphotos.com/"
            target="_blank"
            rel="noreferrer"
            class="btn contact-details">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="mailto: henri@magnum.cum" class="btn contact-details">
            <i class="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:" class="btn contact-details">
            <i class="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>
      <footer>
        <p>Created by</p>
      </footer>
    </div>
  );
};

export default Footer;
