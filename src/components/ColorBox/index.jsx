import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {

  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "orange", "blue"];

  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);

  return COLOR_LIST[randomIndex];
}


function ColorBox() {

  const [color, setColor] = useState(() => {
    const storageColor = localStorage.getItem("box_color");

    return storageColor ?? "deeppink";
  });


  function handleBoxClick() {

    // get random color -> set color
    const newColor = getRandomColor();

    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }

  return (

    <div
      className="color-box"
      style={{ backgroundColor: color}}
      onClick={handleBoxClick}
    >

    </div>
  );
}

export default ColorBox;
