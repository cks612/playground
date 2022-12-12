import React from "react";
import { useState } from "react";
import "../../styles/_dotsNavigationStyles.scss";

const DotsNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="wrapper">
      <div className="main">
        <div className={isClicked ? "navigation active" : "navigation"} onClick={() => setIsClicked(!isClicked)}>
          <span style={{ "--i": 0, "--x": -1, "--y": 0 }}>
            <ion-icon name="camera-outline" />
          </span>
          <span style={{ "--i": 1, "--x": 1, "--y": 0 }}>
            <ion-icon name="diamond-outline" />
          </span>
          <span style={{ "--i": 2, "--x": 0, "--y": -1 }}>
            <ion-icon name="chatbubble-outline" />
          </span>
          <span style={{ "--i": 3, "--x": 0, "--y": 1 }}>
            <ion-icon name="alarm-outline" />
          </span>
          <span style={{ "--i": 4, "--x": -1, "--y": 1 }}>
            <ion-icon name="game-controller-outline" />
          </span>
          <span style={{ "--i": 5, "--x": -1, "--y": -1 }}>
            <ion-icon name="moon-outline" />
          </span>
          <span style={{ "--i": 6, "--x": 1, "--y": -1 }}>
            <ion-icon name="water-outline" />
          </span>
          <span style={{ "--i": 7, "--x": 1, "--y": 1 }}>
            <ion-icon name="time-outline" />
          </span>
        </div>
        <div className="close" onClick={() => setIsClicked(!isClicked)}>
          <ion-icon name="close-outline" />
        </div>
      </div>
    </div>
  );
};

export default DotsNavigation;
