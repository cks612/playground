import React from "react";
import "../../styles/_animatedGameStyles.scss";

const AnimatedGaming = () => {
  return (
    <section>
      <header>
        <a href="#" className="logo">
          <img src="https://user-images.githubusercontent.com/66737450/218288392-55a4ec19-c8f7-4ade-9745-5df287df6dce.png" alt="logo" />
        </a>
        <i class="fa-solid fa-magnifying-glass" />
      </header>

      <div className="imgScroll">
        <div>
          <img src="https://user-images.githubusercontent.com/66737450/218288378-fcf5c9d9-7132-45a5-a664-90ba67992625.jpg" alt="img1" />
          <img src="https://user-images.githubusercontent.com/66737450/218288379-1586905f-7c30-41b7-b8f9-4b7ee3d77946.jpg" alt="img2" />
          <img src="https://user-images.githubusercontent.com/66737450/218288380-cef278d2-e831-467f-b951-22df28f9d31a.jpg" alt="img3" />
          <img src="https://user-images.githubusercontent.com/66737450/218288382-a643ca7d-ee9b-4830-bffa-52f0c27f93bd.jpg" alt="img4" />
          <img src="https://user-images.githubusercontent.com/66737450/218288383-c62afaf4-3712-4f87-8edf-cb103ee26f2a.jpg" alt="img5" />
          <img src="https://user-images.githubusercontent.com/66737450/218288386-dd86c3b6-e93e-4188-a783-1eb2fa30ae68.jpg" alt="img6" />
          <img src="https://user-images.githubusercontent.com/66737450/218288388-9d161513-0110-4cfc-b014-05a7d75c6685.jpg" alt="img7" />
          <img src="https://user-images.githubusercontent.com/66737450/218288389-653cd72d-b7b9-4dac-9e5e-71fe086853cc.jpg" alt="img8" />
          <img src="https://user-images.githubusercontent.com/66737450/218288390-c66df112-a49a-4e4a-ae6d-3d8343ae834a.jpg" alt="img9" />
        </div>
        <div>
          <img src="https://user-images.githubusercontent.com/66737450/218288378-fcf5c9d9-7132-45a5-a664-90ba67992625.jpg" alt="img1" />
          <img src="https://user-images.githubusercontent.com/66737450/218288379-1586905f-7c30-41b7-b8f9-4b7ee3d77946.jpg" alt="img2" />
          <img src="https://user-images.githubusercontent.com/66737450/218288380-cef278d2-e831-467f-b951-22df28f9d31a.jpg" alt="img3" />
          <img src="https://user-images.githubusercontent.com/66737450/218288382-a643ca7d-ee9b-4830-bffa-52f0c27f93bd.jpg" alt="img4" />
          <img src="https://user-images.githubusercontent.com/66737450/218288383-c62afaf4-3712-4f87-8edf-cb103ee26f2a.jpg" alt="img5" />
          <img src="https://user-images.githubusercontent.com/66737450/218288386-dd86c3b6-e93e-4188-a783-1eb2fa30ae68.jpg" alt="img6" />
          <img src="https://user-images.githubusercontent.com/66737450/218288388-9d161513-0110-4cfc-b014-05a7d75c6685.jpg" alt="img7" />
          <img src="https://user-images.githubusercontent.com/66737450/218288389-653cd72d-b7b9-4dac-9e5e-71fe086853cc.jpg" alt="img8" />
          <img src="https://user-images.githubusercontent.com/66737450/218288390-c66df112-a49a-4e4a-ae6d-3d8343ae834a.jpg" alt="img9" />
        </div>
      </div>
      <ul className="navigation">
        <li className="active">
          <a href="#">
            <i class="fa-solid fa-house" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-fire" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-gamepad" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-user" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AnimatedGaming;
