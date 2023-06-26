import "./App.scss";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/nav_bar/NavBar";
// PAGES
import Gallery from "./pages/Gallery";
import DashboardPage from "./pages/Dashboard";
import Home from "./pages/Home";
import SandBox from "./pages/SandBox";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/Sandbox" element={<SandBox />} />
      </Routes>
    </>
  );
}

export default App;
