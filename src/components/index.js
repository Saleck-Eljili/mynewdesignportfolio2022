import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Particles />

      <Portfolio />
      <Resume />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
