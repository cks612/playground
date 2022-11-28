import React from "react";
import "../../styles/_movieCardStyles.scss";

const MovieCard = () => {
  return (
    <div className="movieCardWrapper">
      <div className="card">
        <div className="poster">
          <img src="https://user-images.githubusercontent.com/66737450/204181357-19ad07a1-84f2-4cfd-b06b-91bb06b4c90e.jpg" alt="moviePoster" />
        </div>
        <div className="details">
          <img className="logo" src="https://user-images.githubusercontent.com/66737450/204181341-d8082770-f398-444e-be02-c417f21d25af.png" alt="avatarLogo" />
          <h3>Directed by James Cameron</h3>
          <div className="rating">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-regular fa-star" />
            <span>4/5</span>
          </div>
          <div className="tags">
            <span>Scu-fi</span>
            <span>Action</span>
          </div>
          <div className="info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil vero, dolore, dicta qui possimus fuga amet similique hic aliquid quaerat eligendi
              itaque totam, sequi nobis temporibus. Ad, fugit! Maxime, natus...
            </p>
          </div>
          <div className="cast">
            <h4>Cast</h4>
            <ul>
              <li>
                <img src="https://user-images.githubusercontent.com/66737450/204181344-4734ada2-a0d0-4118-8680-aaa9787ea6be.jpg" alt="cast1" />
              </li>
              <li>
                <img src="https://user-images.githubusercontent.com/66737450/204181345-7bab870f-69fb-4eaa-b19b-d24c14726258.jpg" alt="cast2" />
              </li>
              <li>
                <img src="https://user-images.githubusercontent.com/66737450/204181347-8af1aa77-b855-4a9a-8234-16dffd751a8d.jpg" alt="cast3" />
              </li>
              <li>
                <img src="https://user-images.githubusercontent.com/66737450/204181350-e487fee6-c0b0-47c2-a9e9-8b09ac185d8e.jpg" alt="cast4" />
              </li>
              <li>
                <img src="https://user-images.githubusercontent.com/66737450/204181355-f88e6b9c-ed0b-423a-8a70-7b5b74c41f7a.jpg" alt="cast5" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
