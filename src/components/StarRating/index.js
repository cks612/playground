import React from "react";
import "../../styles/_starRatingStyles.scss";

const StarRating = () => {
  return (
    <div className="starRatingWrapper">
      <div className="container">
        <div className="rating">
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
          <input type="radio" name="clr1" style={{ "--c": "#ff9933" }} />
        </div>
        <div className="rating">
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
          <input type="radio" name="clr2" style={{ "--c": "#ffffff" }} />
        </div>
        <div className="rating">
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
          <input type="radio" name="clr3" style={{ "--c": "#2ae418" }} />
        </div>
      </div>
    </div>
  );
};

export default StarRating;
