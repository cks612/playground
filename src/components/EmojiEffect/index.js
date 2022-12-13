import React, { useState } from "react";
import "../../styles/_emojiEffectStyles.scss";

const EmojiEffect = () => {
  const [spanAppend, setSpanAppend] = useState({
    span: [],
  });
  const handleMouseMove = e => {
    let style = { left: e.pageX, top: e.pageY };
    let s = <span style={style} />;

    setSpanAppend(prev => ({
      span: [...prev.span, s],
    }));

    setTimeout(() => {
      setSpanAppend({
        span: [],
      });
    }, 1000);
  };
  console.log(spanAppend);

  return (
    <div className="wrapper" onMouseMove={handleMouseMove}>
      {spanAppend?.span?.map(res => res)}
    </div>
  );
};

export default EmojiEffect;
