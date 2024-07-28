import React from "react";
import "./Photos.css";

function Photos() {
  return (
    <div>
      <h3 className="head-photos-title">Appreciation Certificates</h3>
      <div className="row certificates-container">
        <div className="col-lg-3">
          <div className="card-crt">
            <div className="card-body card-body-container">
              <div className="img-container">
                <img
                  className="certificate-img"
                  src="image/image1.jpg"
                  alt="certificate 1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card-crt">
            <div className="card-body card-body-container">
              <div className="img-container">
                <img
                  className="certificate-img"
                  src="image/image2.jpg"
                  alt="certificate 2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card-crt">
            <div className="card-body card-body-container">
              <div className="img-container">
                <img
                  className="certificate-img"
                  src="image/image3.jpg"
                  alt="certificate 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
