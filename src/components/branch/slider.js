import React, { useState } from "react";
import "./slider.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";

function Slider() {
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
  let index = 0;
  const [newindex, setnewindex] = useState(index);
  function left() {
    setnewindex(newindex - 1);
    if (newindex === 0) {
      setnewindex(photos.length - 1);
    }
  }
  function right() {
    setnewindex(newindex + 1);
    if (newindex === photos.length - 1) {
      setnewindex(0);
    }
  }
  return (
    <div className={"body"}>
      <div
        className={"container"}
        style={{
          backgroundImage: `url(${photos[newindex]})`,
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          width: "100%",
        }}
      >
        <button className={"left-button"} onClick={left}>
          {"<"}
        </button>
        <button className={"right-button"} onClick={right}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Slider;
