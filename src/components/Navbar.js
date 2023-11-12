import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPrint } from "../slices/printSlice/printSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handlePrint = () => {
    dispatch(setPrint(true));
  };

  return (
    <nav id="navbar" className="navbar">
      {/* <div className="navbar-inner"> */}
      <div className="navbar-content">
        <div className="logo">
          <NavLink to="/">
            Resume <span className="logo-highlight">Builder</span>
          </NavLink>
        </div>
        <div className="resume-controls">
          {/* <NavLink */}
          {location.pathname !== "/download" ? (
            <NavLink to="/download">
              <button className="rs-dwnld-btn" >
                Preview
              </button>
            </NavLink>
          ) : (
            <button className="rs-dwnld-btn" onClick={handlePrint}>
              Download
            </button>
          )}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
