import React from "react";
import "../../styles/_magicNavigationMenuStyles.scss";

const MagicNavigationMenu = () => {
  const clickHandler = e => {
    const list = document.querySelectorAll(".list");
    console.log(list);
    function activeLink() {
      list.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach(item => item.addEventListener("click", activeLink));
  };

  return (
    <div className="magicNavigationWrapper">
      <div className="navigation">
        <ul>
          <li className="list active" style={{ "--clr": " #f44336" }}>
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li className="list" onClick={clickHandler} style={{ "--clr": " #ffa117" }}>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li className="list" style={{ "--clr": " #0fc70f" }}>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li className="list" style={{ "--clr": " #2196f3" }}>
            <a href="#">
              <span className="icon">
                <ion-icon name="camera-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li className="list" style={{ "--clr": " #b145e9" }}>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
            </a>
          </li>

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default MagicNavigationMenu;
