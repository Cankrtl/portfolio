import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../assets/styles/NavMain.module.css";

export const NavMain = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <section
      className={`${classes.NavMain} ${showNav ? classes.NavMainExpanded : ""}`}
    >
      <button
        type="button"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        Menü
      </button>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/hakkımda">About</NavLink>
        </li>
        <li>
          <NavLink to="/iletişim">Contact</NavLink>
        </li>
      </ul>
    </section>
  );
};
