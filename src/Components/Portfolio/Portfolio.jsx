import React from "react";
import img1 from "../../Assets/Images/port1.png";
import img2 from "../../Assets/Images/port2.png";
import img3 from "../../Assets/Images/port3.png";

export default function Portfolio() {
  function showPortfolioLayoutImg(src) {
    document
      .querySelector(`.portfolio-layout`)
      .classList.replace(`d-none`, `d-block`);

    document.querySelector("#portfolio-layout-img").setAttribute(`src`, src);
  }

  function hidePortfolioLayoutImg() {
    document
      .querySelector(`.portfolio-layout`)
      .addEventListener(`click`, function (e) {
        if (this !== e.target) {
          return;
        }
        this.classList.replace(`d-block`, `d-none`);
      });
  }

  return (
    <div className="min-vh-100">
      <div
        className="portfolio-layout min-vh-100 min-vw-100 bg-info bg-opacity-25 d-flex justify-content-center align-items-center d-none"
        onClick={() => {
          hidePortfolioLayoutImg();
        }}
      >
        <div className="portfolio-layout-img-continer">
          <img id="portfolio-layout-img" alt="port" className="w-100" />
        </div>
      </div>
      <div className="container pt-105">
        <div className="portfolio-text-color text-center mb-4">
          <h2 className="fw-bold fs-1 mb-3">PORTFOLIO COMPONENT</h2>
          <div className="d-inline-block star-icon-dark position-relative">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="row gy-3 mb-5">
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img1);
              }}
            >
              <img src={img1} alt="port1" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img2);
              }}
            >
              <img src={img2} alt="port2" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img3);
              }}
            >
              <img src={img3} alt="port3" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img1);
              }}
            >
              <img src={img1} alt="port1" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img2);
              }}
            >
              <img src={img2} alt="port2" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative port-img-container rounded-3 overflow-hidden"
              onClick={() => {
                showPortfolioLayoutImg(img3);
              }}
            >
              <img src={img3} alt="port3" className="w-100" />
              <div className="port-img-layout bg-green position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white port-icon-fs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
