import React, { useState } from "react";
import "../../styles/_searchBoxStyles.scss";

const SearchBox = () => {
  const [isClicked, setIsClicked] = useState();

  return (
    <div className="searchboxWrapper">
      <div className={isClicked ? "searchBox active" : "searchBox"}>
        <div className="search" onClick={() => setIsClicked(!isClicked)}>
          <i class="fa-solid fa-magnifying-glass" />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="Search Hear" />
        </div>
        <div className="close" onClick={() => setIsClicked(!isClicked)}>
          <i class="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
