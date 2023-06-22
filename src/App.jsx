import "./App.scss";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/nav_bar/NavBar";
// PAGES
import Gallery from "./pages/Gallery";
import Breeds from "./pages/Breeds";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SandBox from "./pages/SandBox";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Sandbox" element={<SandBox />} />
      </Routes>
    </>
  );
}

export default App;
