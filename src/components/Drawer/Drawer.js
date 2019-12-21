import React, { useState, Fragment } from "react";
import "./Drawer.scss";
import { NavLink } from "react-router-dom";
import { MdArrowForward, MdClear } from "react-icons/md";
import Backdrop from "../Backdrop/Backdrop";

const links = [
  { to: "/", label: "Main page", exact: true },
  { to: "/newPost", label: "Create quote", exact: false }
];

const Drawer = () => {
  const [state, dispatch] = useState({ show: false });
  const clsDrawer = ["Drawer", state.show ? "show" : ""];
  const clsButton = ["MenuHandler", state.show ? "active" : ""];

  return (
    <Fragment>
      <nav className={clsDrawer.join(" ")}>
        <h3>Quote book</h3>
        <ul>
          {links.map((elem, index) => (
            <li key={index}>
              <NavLink
                to={elem.to}
                exact={elem.exact}
                onClick={() => dispatch({ show: false })}
              >
                {elem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={clsButton.join(" ")}
        onClick={() => dispatch({ show: !state.show })}
      >
        {state.show ? <MdClear /> : <MdArrowForward />}
      </button>
      {state.show && <Backdrop handler={() => dispatch({ show: false })} />}
    </Fragment>
  );
};

export default Drawer;
