// import { useState } from "react";
import Box from "./Box";

const Section3 = () => {
  const items = [
    { id: 1, name: "Catch the moment!", isNew: !true },
    { id: 2, name: "Classic portrait", isNew: !true },
    { id: 3, name: "Business, Corporations", isNew: true },
    { id: 3, name: "High-Fashion", isNew: !true },
    { id: 5, name: "Socio-political tensions", isNew: !true },
    { id: 6, name: "Food", isNew: true },
    { id: 7, name: "Interiors", isNew: true },
    { id: 8, name: "Look book", isNew: true },
    { id: 9, name: "Pack-shots", isNew: true },
    { id: 10, name: "Instagram", isNew: true },
    { id: 11, name: "Drone", isNew: true },
    { id: 12, name: "Pregnant-Baby", isNew: true },
  ];
  const INIT_SHOW_ITEM = 2;
  const [showItem, setShowItem] = useState(INIT_SHOW_ITEM);

  return (
    <div>
      <section class="section3">
        <div class="section3-h1">
          <h1 id="offer">We specialize in:</h1>
        </div>

        <div class="section3-box">
          {items
            .filter((item, index) => index < showItem)
            .map(({ id, name, isNew }) => (
              <Box id={id} name={name} isNew={isNew} />
            ))}
        </div>
        <div className="btn-wrapper">
          <button
            onClick={(e) => setShowItem(showItem + 4)}
            className="actionBtn">
            See our other skills
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section3;
