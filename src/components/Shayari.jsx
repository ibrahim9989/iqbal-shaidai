import React from "react";
function Shayari() {
  return (
    <section id="Shayari">
      <div
        id="testimonial-carousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="testimonial-text">
              Har roz gir kar bhi mukammal Khade hain,
              <br />
              Ae Zindagi dekh mere honsle tujhse bhi bade hain
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Zindagi khud hai ek imtihan hai,
              <br />
              Har pal yahan ek nayi dastaan hai.
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Dil ke armaan aansuon mein beh gayem,
              <br />
              Hum wafa karke bhi tanha reh gaye.
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Khubsorat zindagi ke raaz,
              <br />
              Dua kijiye dua lijiye dua dijiye.
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Zindagi teri sari chalenin ak tarf,
              <br />
              Mera har baat pe muskura dena kamal raha.
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Zindagi se sikho jeene ka salika,
              <br />
              Khushiyon ke baad hi aata hai gham ka tika....
            </h2>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Shayari;
