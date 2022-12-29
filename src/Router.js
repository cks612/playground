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
import InputField from "./components/InputField";
import ValidationCheck from "./components/ValidationCheck";
import GlowingRing from "./components/GlowingRing";
import QrCodeScanner from "./components/QrCodeScanner";
import SwipeButton from "./components/SwipeButton";
import Calculator from "./components/Calculator";
import CheckboxToggle from "./components/CheckboxToggle";
import LoginForm from "./components/LoginForm";
import IphoneEffect from "./components/IphoneEffect";
import Parallax from "./components/Parallax";
import SearchBox from "./components/SearchBox";
import NavigationSearchBar from "./components/NavigationMenuSearchBar";
import BlockRotate from "./components/BlockRotate";
import AnimatedCubes from "./components/AnimatedCubes";
import SideBar from "./components/DashBoardSideBar";
import ButtonHover from "./components/ButtonHover";
import LuckySpinning from "./components/LuckySpinning";
import SocialMenu from "./SocialMenu";
import FloatingText from "./components/FloatingText";
import LoginPage from "./components/LoginPage";
import SunEffect from "./components/SunEffect";
import MovieCard from "./components/MovieCard";
import PasswordChecker from "./components/PasswordChecker";
import InfiniteTricker from "./components/InfiniteTricker";
import DotsNavigation from "./components/DotsNavigation";
import EmojiEffect from "./components/EmojiEffect";
import CreativeMenu from "./components/CreativeMenu";
import ElasticLine from "./components/ElasticLine";
import NextLevel from "./components/NextLevel";
import Countdown from "./components/Countdown";
import Christmas from "./components/Christmas";

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
        <Route path="/inputField" element={<InputField />} />
        <Route path="/validationCheck" element={<ValidationCheck />} />
        <Route path="/glowingRing" element={<GlowingRing />} />
        <Route path="/qrCodeScanner" element={<QrCodeScanner />} />
        <Route path="/swipeButton" element={<SwipeButton />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/checkboxToggle" element={<CheckboxToggle />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/iphone" element={<IphoneEffect />} />
        <Route path="/parallax" element={<Parallax />} />
        <Route path="/searchBox" element={<SearchBox />} />
        <Route path="/navigationSearchBar" element={<NavigationSearchBar />} />
        <Route path="/blockRotate" element={<BlockRotate />} />
        <Route path="/animatedCubes" element={<AnimatedCubes />} />
        <Route path="/dashBoardSideBar" element={<SideBar />} />
        <Route path="/buttonHover" element={<ButtonHover />} />
        <Route path="/luckySpinning" element={<LuckySpinning />} />
        <Route path="/socialMenu" element={<SocialMenu />} />
        <Route path="/floatingText" element={<FloatingText />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/sunEffect" element={<SunEffect />} />
        <Route path="/movieCard" element={<MovieCard />} />
        <Route path="/passwordChecker" element={<PasswordChecker />} />
        <Route path="/infiniteTricker" element={<InfiniteTricker />} />
        <Route path="/dotsNavigation" element={<DotsNavigation />} />
        <Route path="/emojiEffect" element={<EmojiEffect />} />
        <Route path="/creativeMenu" element={<CreativeMenu />} />
        <Route path="/elasticLine" element={<ElasticLine />} />
        <Route path="/nextLevel" element={<NextLevel />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/christmas" element={<Christmas />} />
      </Routes>
    </Suspense>
  );
}
