import React from "react";
import {
  Header,
  Gallery,
  Intro,
  FindUs,
  Chef,
  SpecialMenu,
  Laurels,
  AboutUs,
} from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./index.css";
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
  </div>
);

export default App;
