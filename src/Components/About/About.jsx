import React from "react";

export default function About() {
  return (
    <div className="min-vh-100 bg-green">
      <div className="min-vh-100 container pt-105 d-flex justify-content-center align-items-center flex-column">
        <div className="text-white text-center mb-3">
          <h2 className="fw-bold fs-1 mb-3">ABOUT COMPONENT</h2>
          <div className="d-inline-block star-icon position-relative">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="row gy-4 text-white">
          <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
