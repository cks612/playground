import React from "react";
import { useState } from "react";
import "../../styles/_tabMenuStyles.scss";

const TabMenu = () => {
  const [isClicked, setIsClicked] = useState({
    home: true,
    profile: false,
    message: false,
    photo: false,
    setting: false,
  });
  const handleClicked = value => {
    if (value === "profile") {
      setIsClicked((isClicked.home = false), (isClicked.photo = false), (isClicked.setting = false), (isClicked.message = false), (isClicked.profile = true));
    }
    if (value === "home") {
      setIsClicked((isClicked.home = true), (isClicked.photo = false), (isClicked.setting = false), (isClicked.message = false), (isClicked.profile = false));
    }
    if (value === "photo") {
      setIsClicked((isClicked.home = false), (isClicked.photo = true), (isClicked.setting = false), (isClicked.message = false), (isClicked.profile = false));
    }
    if (value === "message") {
      setIsClicked((isClicked.home = false), (isClicked.photo = false), (isClicked.setting = false), (isClicked.message = true), (isClicked.profile = false));
    }
    if (value === "setting") {
      setIsClicked((isClicked.home = false), (isClicked.photo = false), (isClicked.setting = true), (isClicked.message = false), (isClicked.profile = false));
    }

    setIsClicked({ ...isClicked });
  };

  return (
    <div className="tabMenuWrapper">
      <div className="navigation">
        <ul>
          <li className={isClicked.home ? "list active" : "list"}>
            <a onClick={() => handleClicked("home")}>
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className={isClicked.profile ? "list active" : "list"}>
            <a onClick={() => handleClicked("profile")}>
              <span className="icon">
                <ion-icon name="people-outline" />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className={isClicked.message ? "list active" : "list"}>
            <a onClick={() => handleClicked("message")}>
              <span className="icon">
                <ion-icon name="chatbubble-outline" />
              </span>
              <span className="text">Messages</span>
            </a>
          </li>
          <li className={isClicked.photo ? "list active" : "list"}>
            <a onClick={() => handleClicked("photo")}>
              <span className="icon">
                <ion-icon name="camera-outline" />
              </span>
              <span className="text">Photos</span>
            </a>
          </li>
          <li className={isClicked.setting ? "list active" : "list"}>
            <a onClick={() => handleClicked("setting")}>
              <span className="icon">
                <ion-icon name="settings-outline" />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator" />
        </ul>
      </div>
    </div>
  );
};

export default TabMenu;
