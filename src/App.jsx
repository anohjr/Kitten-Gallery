import "./App.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/NavBar";
// PAGES
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
