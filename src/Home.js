import React from "react";

import Header from "./Header";
import Main from "./Main";
import Info from "./Info";
import Project01 from "./Project01";
import Project01concept from "./Project01concept";
import Project01redesign from "./Project01redesign";
import Project01device from "./Project01device";
import Project02 from "./Project02";
import Project02concept from "./Project02concept";
import Project02redesign from "./Project02redesign";
import Project02device from "./Project02device";
import Project03 from "./Project03";
import Project03concept from "./Project03concept";
import Project03conceptTwo from "./Project03conceptTwo";
import Project03redesign from "./Project03redesign";
import Project03device from "./Project03device";
import More from "./More";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Info />
      <Project01 />
      <Project01concept />
      <Project01redesign />
      <Project01device />
      <Project02 />
      <Project02concept />
      <Project02redesign />
      <Project02device />
      <Project03 />
      <Project03concept />
      <Project03conceptTwo />
      <Project03redesign />
      <Project03device />
      <More />
      <Footer />
    </div>
  );
};

export default Home;
