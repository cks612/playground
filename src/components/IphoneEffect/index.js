import React, { useState } from "react";
import "../../styles/_iphoneEffectStyles.scss";

const IphoneEffect = () => {
  const [isPopupClicked, setIsPopupClicked] = useState(false);

  return (
    <div className="iphoneWrapper">
      <div className="box">
        <div className="inner">
          <div className={isPopupClicked ? "island_popup active" : "island_popup"} onClick={() => setIsPopupClicked(!isPopupClicked)}>
            <div className="content">
              <div className="details">
                <div className="imgBx">
                  <img src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG" alt="myImg" />
                </div>
                <p>Alex Calling</p>
              </div>
              <div className="action">
                <i class="fa-solid fa-phone red" />
                <i class="fa-solid fa-phone green" />
              </div>
            </div>
          </div>
        </div>
        <i className="btn btn1" />
        <i className="btn btn2" />
        <i className="btn btn3" />
        <i className="rightSideBtn" />
      </div>
    </div>
  );
};

export default IphoneEffect;
