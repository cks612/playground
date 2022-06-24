import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import InputAnimation from "./components/InputAnimation/InputAnimation";
import Isometric from "./components/Isometric/Isometric";
import ModernButton from "./components/ModernButton/ModernButton";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/index";

const Loading = () => {
  return <div>Loading...</div>;
};

export default function Router() {
  return (
    <Suspense fallback={Loading()}>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/isometric" element={<Isometric />} />
        <Route path="/inputAnimation" element={<InputAnimation />} />
        <Route path="/modernButton" element={<ModernButton />} />
      </Routes>
    </Suspense>
  );
}
