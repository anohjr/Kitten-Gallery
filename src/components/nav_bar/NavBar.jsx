import { Link, useLocation } from "react-router-dom";
import catLogo from "../../assets/img/cat-logo.png";
import "./NavBar.scss";

function NavBar() {
  let location = useLocation();

  return (
    <nav id="nav_bar">
      <img id="cat_logo" src={catLogo} />
      <ul>
        <li>
          <Link
            to="/"
            className={
              location.pathname == "/" ? "current_page" : "default_page"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            className={
              location.pathname == "/gallery" ? "current_page" : "default_page"
            }
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="breeds"
            className={
              location.pathname == "/breeds" ? "current_page" : "default_page"
            }
          >
            Breeds
          </Link>
        </li>
        <li>
          <Link
            to="favorites"
            className={
              location.pathname == "/favorites"
                ? "current_page"
                : "default_page"
            }
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link
            to="sandbox"
            className={
              location.pathname == "/sandbox" ? "current_page" : "default_page"
            }
          >
            SandBox
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
