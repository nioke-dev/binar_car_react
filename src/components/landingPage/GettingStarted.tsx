import React from "react";

const GettingStarted: React.FC = () => {
  return (
    <section id="cta-banner">
      <div className="cta-banner__wrapper">
        <div className="container">
          <div className="row row-cols-1 py-5">
            <div className="col">
              <div className="card bg--dark-blue p-4">
                <div className="card-body text-center">
                  <div className="row row-cols-1 justify-content-center">
                    <div className="col">
                      <h2 className="text-white fw-bold">
                        Sewa Mobil di (Lokasimu) Sekarang
                      </h2>
                    </div>
                    <div className="col-6">
                      <p className="text-white fw-light">
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </small>
                      </p>
                    </div>
                    <div className="col">
                      <button className="btn btn-success btn-cta">
                        Mulai Sewa Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
