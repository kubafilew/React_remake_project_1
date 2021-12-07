import React from "react";

import "./App.css";

import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export const App = () => {
  return (
    <>
      <body>
        <Nav />
        <Section1 />
        {/* <a href="#about"></a> */}
        <Section2 />
        {/* <a href="#offer"></a> */}
        <Section3 />
      </body>
    </>
  );
};
export default App;

//jak podlinkować sekcje
