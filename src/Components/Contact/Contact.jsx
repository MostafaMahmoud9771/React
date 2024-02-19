import React from "react";

export default function Contact() {
  return (
    <div className="min-vh-100">
      <div className="container pt-105">
        <div className="portfolio-text-color text-center mb-5">
          <h2 className="fw-bold fs-1 mb-3">CONATCT SECTION</h2>
          <div className="d-inline-block star-icon-dark position-relative">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="w-50 mx-auto">
          <input
            className="form-control p-2 mb-4"
            type="text"
            placeholder="userName"
          />
          <input
            className="form-control p-2 mb-4"
            type="number"
            placeholder="userAge"
          />
          <input
            className="form-control p-2 mb-4"
            type="email"
            placeholder="userEmail"
          />
          <input
            className="form-control p-2 mb-4"
            type="password"
            placeholder="userPassword"
          />
          <button className="btn btn-success text-white">Send Message</button>
        </div>
      </div>
    </div>
  );
}
