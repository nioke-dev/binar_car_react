import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const elemToggleFunc = (elem: Element | null) =>
      elem?.classList.toggle("active");

    const navbar = document.querySelector("[data-nav]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const navElemArr = [navOpenBtn, navCloseBtn, overlay];

    const handleNavClick = () => {
      document.body.classList.toggle("active");
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
      elemToggleFunc(document.body);
      setIsNavActive((prevState) => !prevState); // Menggunakan fungsi callback untuk mendapatkan nilai sebelumnya
    };

    navElemArr.forEach((elem) =>
      elem?.addEventListener("click", handleNavClick)
    );

    // clean the event listener after components remove
    return () => {
      navElemArr.forEach((elem) =>
        elem?.removeEventListener("click", handleNavClick)
      );
    };
  }, [isNavActive]);

  return (
    <>
      <section id="navbar" style={{ backgroundColor: "#f1f3ff" }}>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#f1f3ff" }}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              BCR
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <b>BCR</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                {/* NAVIGATION ITEMS */}
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item" style={{ marginRight: "32px" }}>
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#our-service"
                    >
                      Our Service
                    </a>
                  </li>
                  <li className="nav-item" style={{ marginRight: "32px" }}>
                    <a className="nav-link" href="#why-us">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item" style={{ marginRight: "32px" }}>
                    <a className="nav-link" href="#testimonial-section">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item" style={{ marginRight: "32px" }}>
                    <a className="nav-link" href="#FAQ-Section">
                      FAQ
                    </a>
                  </li>
                </ul>
                {/* NAVIGATION ITEMS */}

                {/* REGISTER BUTTON */}
                <form className="d-flex" role="search">
                  <button className="btn btn-success" type="submit">
                    <Link
                      to="/register"
                      className="white btn btn-success btn-sm"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Register
                    </Link>
                    {/* Register */}
                  </button>
                </form>
                {/* REGISTER BUTTON */}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
