import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helper/CarouselData";
// import { ArrowBackIosIcon } from '@material-ui/icons/ArrowBackIos';
import { ArrowBack } from "@material-ui/icons";
import { ArrowForward } from "@material-ui/icons";
// import { ArrowForwardIosIcon } from '@material-ui/icons/ArrowForwardIos';
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBack style={{ frontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <a
            className="Learn_English"
            href="https://apps.apple.com/gb/app/capeesh-language-learning/id1390963312"
            style={{ frontSize: 30 }}
          >
            {images[currImg].subtitle}
          </a>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForward style={{ frontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
export default Carousel;
