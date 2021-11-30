import { useState } from "react";

const Section3 = () => {
  const items = [
    { id: 1, name: "Instagram", isNew: true },
    { id: 2, name: "Drone", isNew: true },
    { id: 3, name: "Business", isNew: true },
    { id: 3, name: "Pregnant-Baby", isNew: true },
    { id: 5, name: "High end", isNew: !true },
    { id: 6, name: "Food", isNew: true },
    { id: 7, name: "Interiors", isNew: true },
    { id: 8, name: "Look book", isNew: true },
    { id: 9, name: "Pack-shots", isNew: true },
    { id: 10, name: "Street", isNew: !true },
    { id: 11, name: "Classic portrait", isNew: !true },
    { id: 12, name: "Fashion", isNew: !true },
  ];
  const INIT_SHOW_ITEM = 3;
  const [showItem, setShowItem] = useState(INIT_SHOW_ITEM);

  return (
    <div>
      <section class="section3">
        <div class="section3-h1">
          <h1 id="offer">We specialize in:</h1>
        </div>

        <div class="section3-box">
          {items
            .filter((items, index) => index <= showItem)
            .map(({ id, name, isNew }) => (
              <button className="s3-button">
                {isNew ? <div className="dot"></div> : ""}
                <p className="section3-p">
                  <p key={id}>
                    {name} {isNew ? "(New)" : ""}
                  </p>
                </p>
              </button>
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
