import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import AnimatedMenu from "./components/AnimatedMenu/AnimatedMenu";
import AnimatedPopup from "./components/AnimatedPopup/AnimatedPopup";
import AnimatedVideo from "./components/AnimatedVideo/AnimatedVideo";
import ArrowMagic from "./components/ArrowMagic/ArrowMagic";
import AwesomeBorder from "./components/AwesomeBorder/AwesomeBorder";
import BackgroundEffects from "./components/BackgroundEffects /BackgroundEffects";
import BorderAnimation from "./components/BorderAnimation/BorderAnimation";
import CircularBar from "./components/CircularBar/CircularBar";
import CustomCheckbox from "./components/CustomCheckbox/CustomCheckbox";
import EnergyBall from "./components/EnergyBall/EnergyBall";
import GradientClock from "./components/GradientClock/GradientClock";
import InputAnimation from "./components/InputAnimation/InputAnimation";
import Isometric from "./components/Isometric/Isometric";
import LiquidLoader from "./components/LiquidLoader/LiquidLoader";
import MagicNavigationMenu from "./components/MagicNavigationMenu/MagicNavigationMenu";
import MenuHoverAnimation from "./components/MenuHoverAnimation";
import MenuHoverEffect from "./components/MenuHoverEffect/MenuHoverEffect";
import ModernButton from "./components/ModernButton/ModernButton";
import Nav from "./components/Nav/Nav";
import Particles from "./components/Particles/Particles";
import RainyCloud from "./components/RainyCloud/RainyCloud";
import ResponsiveCard from "./components/ResponsiveCard/ResponsiveCard";
import RingAnimation from "./components/RingAnimation/";
import Scanner from "./components/Scanner/Scanner";
import TextHover from "./components/TextHover/TextHover";
import ImageHoverEffect from "./components/ImageHoverEffect/";

import Main from "./pages/Main/index";
import RangeSlider from "./components/RangeSlider";
import AnimatedActionMenu from "./components/AnimatedActionMenu";
import DropDownMenu from "./components/DropDownMenu";

const Loading = () => {
  return <div>Loading...</div>;
};

export default function Router() {
  return (
    <Suspense fallback={Loading()}>
      <Nav />
      <Routes>
        <Route path="/playground" element={<Main />} />
        <Route path="/isometric" element={<Isometric />} />
        <Route path="/inputAnimation" element={<InputAnimation />} />
        <Route path="/modernButton" element={<ModernButton />} />
        <Route path="/animatedMenu" element={<AnimatedMenu />} />
        <Route path="/circularBar" element={<CircularBar />} />
        <Route path="/backgroundEffects" element={<BackgroundEffects />} />
        <Route path="/menuHoverEffects" element={<MenuHoverEffect />} />
        <Route path="/magicNavigationMenu" element={<MagicNavigationMenu />} />
        <Route path="/arrowMagic" element={<ArrowMagic />} />
        <Route path="/rainyCloud" element={<RainyCloud />} />
        <Route path="/liquidLoader" element={<LiquidLoader />} />
        <Route path="/animatedPopup" element={<AnimatedPopup />} />
        <Route path="/energyBall" element={<EnergyBall />} />
        <Route path="/responsiveCard" element={<ResponsiveCard />} />
        <Route path="/borderAnimation" element={<BorderAnimation />} />
        <Route path="/animatedVideo" element={<AnimatedVideo />} />
        <Route path="/analogClock" element={<AnalogClock />} />
        <Route path="/gradientClock" element={<GradientClock />} />
        <Route path="/particles" element={<Particles />} />
        <Route path="/awesomeBorder" element={<AwesomeBorder />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/customCheckbox" element={<CustomCheckbox />} />
        <Route path="/menuHoverAnimation" element={<MenuHoverAnimation />} />
        <Route path="/textHover" element={<TextHover />} />
        <Route path="/ringAnimation" element={<RingAnimation />} />
        <Route path="/imageHoverEffect" element={<ImageHoverEffect />} />
        <Route path="/rangeSlider" element={<RangeSlider />} />
        <Route path="/animatedActionMenu" element={<AnimatedActionMenu />} />
        <Route path="/dropDownMenu" element={<DropDownMenu />} />
      </Routes>
    </Suspense>
  );
}
