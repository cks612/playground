import React from "react";
import "../../styles/_emojiEffectStyles.scss";

const EmojiEffect = () => {
  const images = ["😀", "🥰", "❗", "😅", "👽", "❤️", "💜", "💙", "🤪", "🙈"];
  const handleMouseMove = e => {
    let x = e.pageX;
    let y = e.pageY;
    let body = document.getElementsByClassName("emojiWrapper")[0];
    let emoji = document.createElement("span");
    let icon = images[Math.floor(Math.random() * images.length)];
    let size = Math.random() * 50;
    let max = 0;
    let min = 200;
    let randomValue = Math.floor(Math.random() * (max + 1 - min) + min);

    emoji.style.left = x + "px";
    emoji.style.top = y + "px";
    emoji.style.fontSize = 5 + size + "px";
    emoji.style.transform = "translateX(" + randomValue + "px)";
    body.appendChild(emoji);
    emoji.innerText = icon;

    setTimeout(() => {
      emoji.remove();
    }, 1000);
  };

  return <div className="emojiWrapper" onMouseMove={handleMouseMove} />;
};

export default EmojiEffect;
