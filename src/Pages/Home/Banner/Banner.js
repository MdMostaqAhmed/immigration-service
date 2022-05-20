import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/Banner/banner1.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
import banner3 from "../../../images/Banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>IMMIGRATION</h3>
          <p>Special Immigration service for vip clients</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>STUDY PERMIT</h3>
          <p>Millions of applicants around the world are dreaming</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>SPONSORSHIP</h3>
          <p>
            Moving abroad and leaving your loved ones on opposite coast is not
            easy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
