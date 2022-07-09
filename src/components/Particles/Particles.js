import React, { useEffect } from "react";
import "../../styles/_particlesStyles.scss";

const Particles = () => {
  useEffect(() => {
    document.addEventListener("mousemove", e => {
      const body = document.getElementsByClassName("particles")[0];
      const particles = document.createElement("span");
      const size = Math.random() * 8;
      const transformValue = Math.random() * 360;

      const x = e.offsetX;
      const y = e.offsetY;

      particles.style.left = x + "px";
      particles.style.top = y + "px";
      particles.style.width = 2 + size + "px";
      particles.style.height = 2 + size + "px";
      particles.style.transform = "rotate(" + transformValue + "deg)";

      body.appendChild(particles);

      setTimeout(() => {
        particles.remove();
      }, 2000);
    });
  });
  return <div className="particles"></div>;
};

export default Particles;
