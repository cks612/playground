import React from "react";
import "../../styles/_arrowMagicStyles.scss";

const ArrowMagic = () => {
  const selectItemsHandler = () => {
    let marker = document.querySelector("#marker");
    let item = document.querySelectorAll("ul li a");

    function Indicator(e) {
      marker.style.top = e.offsetTop + "px";
      marker.style.width = e.offsetWidth + "px";
    }

    item.forEach(link => {
      link.addEventListener("mousemove", e => {
        Indicator(e.target);
      });
    });
  };

  return (
    <div className="arrowWrapper">
      <ul>
        <span id="marker"></span>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">Home</a>
        </li>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">About Us</a>
        </li>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">Our Services</a>
        </li>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">Portfolio</a>
        </li>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">Team</a>
        </li>
        <li onMouseMove={selectItemsHandler}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ArrowMagic;
