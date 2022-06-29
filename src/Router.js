import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedMenu from "./components/AnimatedMenu/AnimatedMenu";
import ArrowMagic from "./components/ArrowMagic/ArrowMagic";
import BackgroundEffects from "./components/BackgroundEffects /BackgroundEffects";
import CircularBar from "./components/CircularBar/CircularBar";
import InputAnimation from "./components/InputAnimation/InputAnimation";
import Isometric from "./components/Isometric/Isometric";
import LiquidLoader from "./components/LiquidLoader/LiquidLoader";
import MagicNavigationMenu from "./components/MagicNavigationMenu/MagicNavigationMenu";
import MenuHoverEffect from "./components/MenuHoverEffect/MenuHoverEffect";
import ModernButton from "./components/ModernButton/ModernButton";
import Nav from "./components/Nav/Nav";
import RainyCloud from "./components/RainyCloud/RainyCloud";
import Main from "./pages/Main/index";

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
      </Routes>
    </Suspense>
  );
}
