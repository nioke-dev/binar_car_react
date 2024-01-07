import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const imageStyle = {
  border: "0",
};

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
      // console.log("Nav Clickedd")
      document.body.classList.toggle("active");
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
      elemToggleFunc(document.body);
      setIsNavActive(!isNavActive);
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
    <header className="header">
      {/* Overlay */}
      <div
        className={`overlay ${isNavActive ? "active" : ""}`}
        data-overlay
      ></div>

      <div className="container">
        <a href="/" className="logo">
          <img
            src="https://i.ibb.co/MkygZR1/bcr-logo.png"
            alt="bcr-logo"
            style={imageStyle}
          />
        </a>

        <a className="nav-open-btn" data-nav-open-btn>
          <img
            src="https://i.ibb.co/0VBC9mX/fi-menu.png"
            alt="fi-menu"
            style={imageStyle}
            width="24"
            height="24"
          />
        </a>

        <nav className="navigasi" data-nav>
          <div className="navigasi-top">
            <h4 className="text-logo">
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                BCR
              </a>
            </h4>

            <a className="nav-close-btn" data-nav-close-btn>
              <img
                src="https://i.ibb.co/Wk7Vbhb/fi-x.png"
                alt="fi-x"
                style={imageStyle}
                width="24"
                height="24"
              />
            </a>
          </div>

          <ul className="navigasi-list">
            <li>
              <a href="#service" className="navigasi-link text-dark ">
                Our Services
              </a>
            </li>

            <li>
              <a href="#about" className="navigasi-link text-dark">
                Why Us
              </a>
            </li>

            <li>
              <a href="#testimoni" className="navigasi-link text-dark">
                Testimony
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="navigasi-link text-dark"
                style={{ width: "120px", marginRight: "200px" }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="btn btn-success"
            style={{
              borderRadius: "10px",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
              className="white"
            >
              Register
            </Link>
            {/* Register */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
