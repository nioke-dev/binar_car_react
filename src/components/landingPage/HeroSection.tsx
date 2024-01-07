import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className=""
      style={{ backgroundColor: "#f1f3ff" }}
    >
      <div className={"container"}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-4 row-cols-xxl-2 py-5">
          <div
            className="col"
            style={{ paddingTop: "117px", paddingBottom: "30px" }}
          >
            <h1 className="hero-title">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link
              className="btn btn-success btn-hero"
              style={{ marginLeft: "0px" }}
              to="/cars"
            >
              Mulai Sewa Mobil
            </Link>
          </div>
          <div className="col hero__right" style={{ paddingTop: "37px" }}>
            <div className="img__wrapper">
              <img
                className="img-fluid main__image--car"
                width="550px"
                height="400px"
                src="https://i.ibb.co/T2b0yPQ/Mercedes-Car-EQC-300k-W-Edition-900x598-1.png"
                alt="car images"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
