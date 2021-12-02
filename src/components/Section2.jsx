import { useState } from "react";

const Section2 = () => {
  const heroes = [
    {
      id: 1,
      name: "HENRI CARTIER-BRESSON",
      info: "Henri developed a strong fascination with painting early on, and particularly with Surrealism. In 1947, with Robert Capa, George Rodger, David ‘Chim’ Seymour and William Vandivert, he founded Magnum Photos.",
      url: "https://iphf.org/wp-content/uploads/2016/08/Henri-Cartier-Bresson-302x235.jpg",
    },
    {
      id: 2,
      name: "BRUCE DAVIDSON",
      info: "When he left military service in 1957 he worked as a freelance photographer for LIFE magazine. In 1957 in Paris he met Henri Cartier-Bresson, one of the founders of the Magnum",
      url: "https://s30964.p1087.sites.pressdns.com/wp-content/uploads/2014/11/davidson_portrait.jpg",
    },
    {
      id: 3,
      name: "PHILIPPE HALSMAN",
      info: "Philippe opened a portrait studio in Montparnasse in 1934, where he photographed André Gide, Marc Chagall, André Malraux, Le Corbusier and other writers and artists, using an innovative twin-lens reflex camera that he had designed himself.",
      url: "https://flashbak.com/wp-content/uploads/2015/12/Self-portrait.-1950.-Philippe-Halsman-1200x1474.png",
    },
    {
      id: 4,
      name: "ELIOTT ERWITT",
      info: "In 1953, Erwitt joined Magnum Photos and worked as a freelance photographer for Collier’s, Look, LIFE, Holiday and other luminaries in that golden period for illustrated magazines. ",
      url: "https://www.egconf.com/sites/the-eg/files/styles/presenter/public/Erwitt_Eliott.jpg?itok=BgV1g9ln",
    },
    {
      id: 5,
      name: "ALEX WEBB",
      info: "Alex is best known for his complex and vibrant color photographs of serendipitous or enigmatic moments, often in places with socio-political tensions.",
      url: "https://filmstudycenter.fas.harvard.edu/wp-content/uploads/2017/09/Alex-Webb-Headshot-600x743.jpg",
    },
    {
      id: 6,
      name: "BRUCE GILDEN",
      info: "One of the most iconic street photographers of our time. Known for his graphic and often confrontational close-ups made using flash, his images have a degree of intimacy and directness that have become a signature in his work. ",
      url: "https://www.jokes-saatio.fi/wp-content/uploads/2020/02/maxmotel_bruce_gilden_nyc_2011_3151-768x1152.jpg",
    },
  ];

  const INIT_SHOW_HEROES = 0;
  const [showHero, setShowHero] = useState(INIT_SHOW_HEROES);

  return (
    <div>
      <section class="section2">
        <h1 class="section2-h1">
          <p id="about">Photographers</p>
        </h1>
        <ul>
          {heroes
            .filter((item, index) => index <= showHero)
            .map(({ id, name, info, url }) => (
              <li class="list1">
                <div class="part1">
                  <img key={id} class="person-avatar" src={url} alt="hero" />
                  <h4 class="person-h">{name}</h4>
                  <p class="person-p">{info}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className="btn-wrapper">
          <button
            onClick={(e) => setShowHero(showHero + 1)}
            className="actionBtn">
            Meet the rest of the heroes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section2;
