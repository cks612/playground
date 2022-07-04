import React from "react";
import "../../styles/_responsiveCardStyles.scss";

const ResponsiveCard = () => {
  return (
    <div className="responsiveCardWrapper">
      <div className="card">
        <div className="circle" style={{ "--clr": " #f40103" }}>
          <img
            src="https://user-images.githubusercontent.com/66737450/177089115-887384d8-a4cd-41e7-8054-6e4287dc4704.png"
            alt="cocaColaLogo"
            className="logo"
          />
        </div>
        <div className="content">
          <h2>CocaCola </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <a href="/playground">Explore</a>
        </div>
        <img
          src="https://user-images.githubusercontent.com/66737450/177089122-c49e4979-1379-458b-bc19-149bc97413df.png"
          alt="cocaColaImg"
          className="product_img"
        />
      </div>
      <div className="card">
        <div className="circle" style={{ "--clr": " #02953a" }}>
          <img src="https://user-images.githubusercontent.com/66737450/177089130-b6a9e134-4c7e-49fc-8317-4c6d61be7acf.png" alt="spriteLogo" className="logo" />
        </div>
        <div className="content">
          <h2>Sprite </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <a href="/playground">Explore</a>
        </div>
        <img
          src="https://user-images.githubusercontent.com/66737450/177089134-03cff718-9715-4726-a40d-68835a5ed6e0.png"
          alt="spriteImg"
          className="product_img"
        />
      </div>
    </div>
  );
};

export default ResponsiveCard;
