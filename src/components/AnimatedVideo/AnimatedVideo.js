import React, { useState } from "react";
import "../../styles/_animatedVideoStyles.scss";

const AnimatedVideo = () => {
  const [acitve, setActive] = useState(false);

  const changeClassHandler = () => {
    setActive(!acitve);
  };

  return (
    <div className="animatedVideo">
      <div className={acitve ? "btn active" : "btn"} onClick={changeClassHandler}>
        <div className="play"></div>
        <p>Play Video</p>
      </div>
      <div className={acitve ? "clip active" : "clip"}>
        <video src="https://user-images.githubusercontent.com/66737450/177507355-a05ba504-414c-48b1-8f47-d35851512525.mp4" autoPlay muted loop></video>
        <b className="close" onClick={changeClassHandler}>
          Close
        </b>
      </div>
    </div>
  );
};

export default AnimatedVideo;
