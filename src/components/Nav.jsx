import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="container1">
        <div class="box1">
          <button class="b1">MAGNUM AGENCY</button>
          {/* <a href="#magnum" class="b2"></a> */}
        </div>
        <div class="box2">
          <div>
            <a href="#about" class="b2">
              ABOUT
            </a>
          </div>
          <div>
            <a href="#offer" class="b3">
              OFFER
            </a>
          </div>
          <div>
            <a href="/#" class="b4">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
