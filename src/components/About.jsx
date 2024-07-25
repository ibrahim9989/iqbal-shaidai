import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <section id="About">
        <div className="container-about container">
          <div className="row">
            <div className="card">
              <div className="row g-0">
                <div className="col-12 col-md-6 order-2 order-md-1 item-top text-md-left p-3">
                  <h5 className="about-card-title">
                    Biography of Mohd Mushaiyaduddin
                  </h5>
                  <p className="about-card-text">
                    <b>Pen Name:</b> Iqbal Shaidai <br />
                    <b>Date of Birth:</b> February 28, 1943 <br />
                    <b>Father's Name:</b> Mohd Jalaluddin <br />
                    <b>Grandfather's Name:</b> Mohd Alauddin <br />
                    <b>Education:</b> Bachelor of Science (B.Sc.) in
                    Mathematics, Physics, and Chemistry (MPC)
                  </p>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2 p-3">
                  <img
                    className="about-image-top img-fluid"
                    src="image/iqbalshaidai.jpg"
                    alt="Iqbal Shaidai"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row details">
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="about-image-details-container">
                  <img
                    className="about-image-details"
                    src="image/badge.png"
                    alt=""
                  />
                </div>
                <div className="about-card-body">
                  <h5 className="card-title">Professional Career</h5>
                  <ul className="card-text">
                    <li>Divisional Panchayat Officer, Mahbubnagar</li>
                    <li>Mandal Parishad Development Officer</li>
                  </ul>
                  <h5 className="card-title">First Book:</h5>
                  <ul className="card-text">
                    <li>Aatish-e-Sayaal</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="about-image-details-container">
                  <img
                    className="about-image-details"
                    src="image/trophy.png"
                    alt=""
                  />
                </div>
                <div className="about-card-body">
                  <h5 className="card-title">Awards:</h5>
                  <ul className="card-text">
                    <li>Lifetime Achievement Award (2008)</li>
                  </ul>
                  <h5 className="card-title">Famous Publications:</h5>
                  <ul className="card-text">
                    <li>Boond ma jakda toofan (1200 gazals)</li>
                    <li>Kainat nuqte ma (1620 gazals)</li>
                    <li>Aatish e sayaal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-images-about">
            <div className="img-slide-about">
              <img src="image/IMG1.jpg" alt="Slide 1" />
              <img src="image/IMG4.jpg" alt="Slide 2" />
              <img src="image/IMG3.jpg" alt="Slide 3" />
              <img src="image/IMG2.jpg" alt="Slide 4" />
              <img src="image/IMG5.jpg" alt="Slide 5" />
              <img src="image/IMG7.jpg" alt="Slide 6" />
              <img src="image/IMG6.jpg" alt="Slide 7" />
              <img src="image/IMG8.jpg" alt="Slide 8" />
              <img src="image/IMG9.jpg" alt="Slide 9" />
            </div>
            <div className="img-slide-about">
              <img src="image/IMG1.jpg" alt="Slide 1" />
              <img src="image/IMG4.jpg" alt="Slide 2" />
              <img src="image/IMG3.jpg" alt="Slide 3" />
              <img src="image/IMG2.jpg" alt="Slide 4" />
              <img src="image/IMG5.jpg" alt="Slide 5" />
              <img src="image/IMG7.jpg" alt="Slide 6" />
              <img src="image/IMG6.jpg" alt="Slide 7" />
              <img src="image/IMG8.jpg" alt="Slide 8" />
              <img src="image/IMG9.jpg" alt="Slide 9" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
