import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ProductCards from "./pages/ProductCards";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Careers from "./pages/Careers";

import book from "../styles/Images/BatteredBookImage.webp";
import shoes from "../styles/Images/03-crocs-by-carrots-gq-september-2020.webp";
import hat from "../styles/Images/hat.jpg";
import controller from "../styles/Images/61sQsA4NpXL._AC_SX679_.jpg";
import headset from "../styles/Images/headset.webp";
import logo from "../styles/Images/logo192.png";
import logo1 from "../styles/Images/react-icon-dark.jpg";

import "../styles/App.css";

export const products = [
  {
    id: 1,
    name: "book",
    description: "a wonderful book to read on your own time",
    image: book,
  },
  { id: 2, name: "shoes", description: "nike running shoes", image: shoes },
  {
    id: 3,
    name: "hat",
    description: "you can wear this thing on your head its insane",
    image: hat,
  },
  {
    id: 4,
    name: "controller",
    description:
      "used to control input into a computing device, such as a game",
    image: controller,
  },
  {
    id: 5,
    name: "headset",
    description: "can be used to hear audio output from a device",
    image: headset,
  },
  { id: 6, name: "bread", description: "tasty", image: logo1 },
  { id: 7, name: "toilet", description: "you know what it is", image: logo },
  { id: 6, name: "bread", description: "tasty", image: logo1 },
  { id: 8, name: "toilet", description: "you know what it is", image: logo },
  { id: 9, name: "bread", description: "tasty", image: logo1 },
  { id: 10, name: "toilet", description: "you know what it is", image: logo },
  { id: 11, name: "bread", description: "tasty", image: logo1 },
  { id: 12, name: "toilet", description: "you know what it is", image: logo },
];

const ContentBuilder = () => {
  return (
    <Router>
      <div className="mainPageContainer" data-testid="mainPageContainer">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="/products"
            element={
              <div className="cardContainer">
                <ProductCards products={products} />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default ContentBuilder;
