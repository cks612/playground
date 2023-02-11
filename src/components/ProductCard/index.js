import React from "react";
import "../../styles/_productCardStyles.scss";

const ProductCard = () => {
  return (
    <div className="productCardWrapper">
      <div className="colaCard">
        <div className="circle" style={{ "--clr": "#f40103" }}>
          <img
            className="logo"
            src="https://user-images.githubusercontent.com/66737450/218260822-0431c063-0625-4054-acd0-0ea8a8547869.png"
            alt="cocacolalogo"
          />
        </div>
        <div className="colaContent">
          <h2>Cocacola</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae beatae unde numquam omnis reprehenderit quisquam qui expedita error a provident.
            Velit facere ut laudantium aut dolore corporis ea laborum sint.
          </p>
          <a href="#">Explore More</a>
        </div>
        <img
          className="product_img"
          src="https://user-images.githubusercontent.com/66737450/218260823-754930e1-845c-4643-b244-122aa5f4fcda.png"
          alt="cocacolabottle"
        />
      </div>
    </div>
  );
};

export default ProductCard;
