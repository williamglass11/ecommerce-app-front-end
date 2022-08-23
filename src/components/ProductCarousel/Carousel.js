import React from "react";
import Slider from "react-slick";

import book from "../../styles/Images/BatteredBookImage.webp";
import shoes from "../../styles/Images/03-crocs-by-carrots-gq-september-2020.webp";
import hat from "../../styles/Images/hat.jpg";
import controller from "../../styles/Images/61sQsA4NpXL._AC_SX679_.jpg";
import headset from "../../styles/Images/headset.webp";
import logo from "../../styles/Images/logo192.png";
import logo1 from "../../styles/Images/react-icon-dark.jpg";

import "../../styles/Carousel.css";

const images = [
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
  { id: 8, name: "bread", description: "tasty", image: logo1 },
  { id: 9, name: "toilet", description: "you know what it is", image: logo },
  { id: 10, name: "bread", description: "tasty", image: logo1 },
  { id: 11, name: "toilet", description: "you know what it is", image: logo },
  { id: 12, name: "bread", description: "tasty", image: logo1 },
];

const Carousel = () => {
  var settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className="carouselContainer">
      <h2 className="carouselHeader">Shop now</h2>
      <Slider {...settings}>
        {images.map((product, index) => {
          return (
            <div className="carouselItem" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="carouselMedia"
              />
              {product.name}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
