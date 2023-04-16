import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const Nav = () => {
  const { nav, setNav } = useContext(NavContext);
  console.log(nav);
  return (
    <>
      {nav ? <div className="navlayer"></div> : ""}
      <div className={nav ? "nav nav-open" : "nav nav-close"}>
        <div className="nav__content">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
