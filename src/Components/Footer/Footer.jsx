import React from "react";

export default function Footer() {
  return (
    <div className="navbar-bg-color">
      <div className="py-5 container">
        <div className="row gy-4 pt-5 text-white text-center">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center border border-white rounded-circle p-2 mx-1">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center border border-white rounded-circle p-2 mx-1">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center border border-white rounded-circle p-2 mx-1">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center border border-white rounded-circle p-2 mx-1">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bg-color text-white text-center py-4">
        <p className="m-0">Copyright &copy; Your Website 2021</p>
      </div>
    </div>
  );
}
