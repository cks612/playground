import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/_mainStyles.scss";

const index = () => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="items">
          <div className="item">
            <p>Isometric menu Tab</p>
            <Link to={"/isometric"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805145-153680c3-971e-47a7-83f5-99594247e51c.png" alt="IsometricMenu" />
            </Link>
            <p>22. 06. 21</p>
          </div>
          <div className="item">
            <p>Animation Input</p>
            <Link to={"/inputAnimation"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805144-68ca97a4-4e5a-44de-a984-42c65573eb32.png" alt="inputAnimation" />
            </Link>
            <p>22. 06. 23</p>
          </div>
          <div className="item">
            <p>Modern Button</p>
            <Link to={"/modernButton"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805147-f252dc51-c335-4de9-805b-670928c5431e.png" alt="modernButton" />
            </Link>
            <p>22. 06. 24</p>
          </div>
          <div className="item">
            <p>Animated Menu</p>
            <Link to={"/animatedMenu"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805140-6798449d-bd77-45b1-a48b-7abd2e728049.png" alt="animatedMenu" />
            </Link>
            <p>22. 06. 25</p>
          </div>
          <div className="item">
            <p>Circular Bar</p>
            <Link to={"/circularBar"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805143-62feae08-7003-43a3-941e-cbb55ae6b762.png" alt="circularBar" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item">
            <p>Background Effects </p>
            <Link to={"/backgroundEffects"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805142-36889858-e34e-4691-8dcf-b6496d211933.png" alt="backgroundEffects" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item">
            <p>Menu Hover Effects </p>
            <Link to={"/menuHoverEffects"}>
              <img src="https://user-images.githubusercontent.com/66737450/175805146-59178838-afad-4948-96c4-dea2cb6e0cb2.png" alt="menuHoverEffects" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item">
            <p>Magic Navigation Menu </p>
            <Link to={"/magicNavigationMenu"}>
              <img src="https://user-images.githubusercontent.com/66737450/175809859-de27e616-60e7-402f-9064-350d61f78cda.png" alt="magicNavigationMenu" />
            </Link>
            <p>22. 06. 26</p>
          </div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
