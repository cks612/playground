import React from "react";
import "../../styles/_animatedMenuStyles.scss";

const AnimatedMenu = () => {
  const mouseOverHandler = () => {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
      list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }
    list.forEach(elements => {
      elements.addEventListener("mouseenter", function (event) {
        let color = event.target.getAttribute("data-color");
        document.getElementsByClassName("animatedWrapper")[0].style.backgroundColor = color;
      });
    });
  };

  return (
    <div className="animatedWrapper">
      <div className="navigation">
        <ul>
          <li className="list active" data-color="#f53b57">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-house"></i>
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list" onMouseOver={mouseOverHandler} data-color="#3c40c6">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-user"></i>
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li className="list" data-color="#05c46b">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-message"></i>
              </span>
              <span className="title">Message</span>
            </a>
          </li>
          <li className="list" data-color="#0fbcf9">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-circle-question"></i>
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li className="list" data-color="#ffa801">
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedMenu;
