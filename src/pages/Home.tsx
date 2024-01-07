// import { Link } from "react-router-dom"
// import { Button } from "react-bootstrap"
import "../styles/landingPage.css";
import Header from "../components/landingPage/Header";
import { useMediaQuery } from "react-responsive";
import HeroSection from "../components/landingPage/HeroSection";
import ServiceSection from "../components/landingPage/ServiceSection";
import WhyUsSection from "../components/landingPage/WhyUsSection";
import TestimonialSection from "../components/landingPage/TestimonialSection";
import GettingStarted from "../components/landingPage/GettingStarted";
import FAQSection from "../components/landingPage/FAQSection";
import Footer from "../components/landingPage/Footer";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      {isDesktop && <TestimonialSection />}
      <GettingStarted />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
