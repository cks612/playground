import React from "react";
import "../../styles/_circularBarStyles.scss";

const CircularBar = () => {
  return (
    <div className="circularBarWrapper">
      <div className="container">
        <div className="card">
          <div className="percent" style={{ "--clr": " #04fc43", "--num": 85 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                85<span>%</span>
              </h2>
              <p>HTML</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ "--clr": " #fee800", "--num": 72 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                72<span>%</span>
              </h2>
              <p>HTML</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ "--clr": " #ff00be", "--num": 60 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                60<span>%</span>
              </h2>
              <p>HTML</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ "--clr": " #06ccff", "--num": 95 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                95<span>%</span>
              </h2>
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularBar;
