import "./App.scss";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/NavBar";
// PAGES
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
