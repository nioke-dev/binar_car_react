const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3 mb-3">
              <h5 className="navigasi-footer mb-3">Our Services</h5>
              <h5 className="navigasi-footer mb-3">Why Us</h5>
              <h5 className="navigasi-footer mb-3">Testimonial</h5>
              <h5 className="navigasi-footer mb-3">FAQ</h5>
            </div>
            <div className="col-md-3 mb-3 footer-sosmed-section">
              <p>Connect with us</p>
              <div className="d-flex flex-column content-sosmed">
                <div className="d-flex grouping-socialmedia">
                  <img
                    src="https://i.ibb.co/3TQ1Bgh/icon-facebook.png"
                    alt="icon-facebook"
                    style={{ border: "0" }}
                    className="mx-2"
                  />
                  <img
                    src="https://i.ibb.co/TqJsYch/icon-instagram.png"
                    alt="icon-instagram"
                    style={{ border: "0" }}
                    className="mx-2"
                  />
                  <img
                    src="https://i.ibb.co/Dfw5cLB/icon-twitter.png"
                    alt="icon-twitter"
                    style={{ border: "0" }}
                    className="mx-2"
                  />
                  <img
                    src="https://i.ibb.co/tY0TB5Z/icon-mail.png"
                    alt="icon-mail"
                    style={{ border: "0" }}
                    className="mx-2"
                  />
                  <img
                    src="https://i.ibb.co/z79LS0p/icon-twitch.png"
                    alt="icon-twitch"
                    style={{ border: "0" }}
                    className="mx-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 copyright-section">
              <p>Copyright Binar 2022</p>
              <a href="#" className="logo">
                <img
                  src="https://i.ibb.co/MkygZR1/bcr-logo.png"
                  alt="bcr-logo"
                  style={{ border: "0" }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
