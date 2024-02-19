import React from "react";
import img from "../../Assets/Images/avatar.svg";

export default function Home() {
  return (
    <div className="min-vh-100 bg-green">
      <div className="container pt-105">
        <div className="text-center text-white">
          <img src={img} alt="Avatar" width="250 px" className="mb-5" />
          <h2 className="fw-bold fs-1 mb-3">START FRAMEWORK</h2>
          <div className="mb-3 d-inline-block star-icon position-relative">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
