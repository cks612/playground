import React from "react";
import "../../styles/_menuHoverEffectStyles.scss";

const MenuHoverEffect = () => {
  return (
    <section className="menuhover">
      <ul>
        <li>
          <a href="#" data-text="Home">
            Home
          </a>
        </li>
        <li>
          <a href="#" data-text="About">
            About
          </a>
        </li>
        <li>
          <a href="#" data-text="Service">
            Service
          </a>
        </li>
        <li>
          <a href="#" data-text="Team">
            Team
          </a>
        </li>
        <li>
          <a href="#" data-text="Contact">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
};

export default MenuHoverEffect;
