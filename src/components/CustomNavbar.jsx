import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar--custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Netflix Logo" className="navbar__logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <i class="bi bi-search icons"></i>
            <div id="kids" class="fw-bold text-white">
              KIDS
            </div>
            <i class="bi bi-bell icons"></i>
            <i class="bi bi-person-circle icons"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
