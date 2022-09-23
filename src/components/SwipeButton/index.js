import React from "react";
import FontAwesome from "react-fontawesome";
import "../../styles/_swipeButtonStyles.scss";

const SwipeButton = () => {
  return (
    <div className="swipeWrapper">
      <a href="#" className="btn">
        Swipe Next
        <span>
          <i class="fa fa-light fa-arrow-right" />
        </span>
      </a>
    </div>
  );
};

export default SwipeButton;
