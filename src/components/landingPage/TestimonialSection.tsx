import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const TestimonialSection: React.FC = () => {
  const owlRef = useRef<OwlCarousel>(null);

  const options = {
    center: true,
    items: 3,
    loop: true,
    dots: false,
    margin: 20,
    nav: true, // Show navigation buttons
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  const handlePrevClick = () => {
    if (owlRef.current) {
      owlRef.current.prev(250);
    }
  };

  const handleNextClick = () => {
    if (owlRef.current) {
      owlRef.current.next(250);
    }
  };

  return (
    <section id="testimonial-section">
      <div className="container container-testimonial">
        <h1
          className="carousel-heading d-flex justify-content-center fw-bold"
          data-aos="zoom-in-up"
        >
          Testimonial
        </h1>
        <p
          className="carousel-subHeading d-flex justify-content-center"
          data-aos="zoom-in-up"
        >
          Berbagai review positif dari para pelanggan kami
        </p>
        <OwlCarousel ref={owlRef} className="owl-theme" {...options}>
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                  <img
                    src="https://i.ibb.co/4YnXrFR/img-photo.png"
                    alt=""
                    style={{ width: "60px", height: "60px", margin: "0 auto" }}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-10">
                  <div className="row">
                    <div className="col-4 d-flex">
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p style={{ fontWeight: "bolder" }}>
                        John Doe, 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                  <img
                    src="https://i.ibb.co/4YnXrFR/img-photo.png"
                    alt=""
                    style={{ width: "60px", height: "60px", margin: "0 auto" }}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-10">
                  <div className="row">
                    <div className="col-4 d-flex">
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "#f8d32a" }}
                        icon={faStar}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p style={{ fontWeight: "bolder" }}>
                        John Doe, 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more cards with similar structure as needed */}
        </OwlCarousel>
        <div className="btn-wrap">
          <button className="prev-btn" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
