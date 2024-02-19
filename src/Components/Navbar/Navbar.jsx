import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-bg-color py-3 fixed-top">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold text-white" to="home">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-white fs-6 fw-bold me-2"
                  to="about"
                  aria-current="page"
                >
                  ABOUT
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fs-6 fw-bold mx-2"
                  to="portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fs-6 fw-bold ms-2"
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
