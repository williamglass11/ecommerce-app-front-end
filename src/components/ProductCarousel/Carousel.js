import React from "react";
import Slider from "react-slick";

import book from "../../styles/BatteredBookImage.webp";
import shoes from "../../styles/03-crocs-by-carrots-gq-september-2020.webp";
import hat from "../../styles/hat.jpg";
import controller from "../../styles/61sQsA4NpXL._AC_SX679_.jpg";
import headset from "../../styles/headset.webp";
import logo from "../../styles/logo192.png";
import logo1 from "../../styles/react-icon-dark.jpg";

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
];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 500,
          infinite: true,
          dots: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
          initialSlide: 2,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 500,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shop now</h2>
      <Slider {...settings}>
        {images.map((product, index) => {
          return (
            <div
              key={index}
              style={{
                width: 60,
              }}
            >
              <img
                src={product.image}
                alt="imageeeeeeee"
                style={{
                  height: 210,
                  width: 200,
                  paddingLeft: "25%",
                }}
              />
              <h3 style={{ textAlign: "center" }}>{product.name}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
