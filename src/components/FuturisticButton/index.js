import React, { useRef } from "react";
import "../../styles/_futuristicButton.scss";

const FuturisticButton = () => {
  const ref = useRef();

  const handleMouseMove = e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    console.log(x);
    ref.current.style.setProperty("--x", x + "deg");
  };

  return (
    <div className="futuristicButtonWrapper">
      <a href="#" ref={ref} onMouseMove={e => handleMouseMove(e)}>
        <i />
        <i />
        <span>Button</span>
      </a>
    </div>
  );
};

export default FuturisticButton;
