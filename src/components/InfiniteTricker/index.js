import React from "react";
import "../../styles/_infiniteTrickerStyles.scss";

const InfiniteTricker = () => {
  return (
    <section>
      <div className="scroll" style={{ "--d": 25, "--y": 200 }}>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
      </div>
      <div className="scroll" style={{ "--d": -25, "--y": 400 }}>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
      </div>
      <div className="scroll" style={{ "--d": 15, "--y": 500 }}>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
      </div>
      <div className="scroll" style={{ "--d": -5, "--y": 50 }}>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
      </div>
      <div className="scroll" style={{ "--d": -15, "--y": -350 }}>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line
            do not cross -
          </span>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTricker;
