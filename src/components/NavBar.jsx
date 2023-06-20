import { Link } from "react-router-dom";
import catLogo from "../assets/img/cat-logo.png";

function NavBar() {
  return (
    <nav id="nav_bar">
      <img id="cat_logo" src={catLogo} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
            <Link to="favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
