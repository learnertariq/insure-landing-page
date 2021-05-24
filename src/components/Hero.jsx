import React from "react";
import heroImageMobile from "../assets/image-intro-mobile.jpg";
import heroImageDesktop from "../assets/image-intro-desktop.jpg";
import Button from "./common/Button";

function Hero(props) {
  return (
    <div className="section section-hero">
      <div className="hero container">
        <img
          className="img hero__img hero__img--mobile"
          src={heroImageMobile}
          alt="insured family picture"
        />

        <div className="hero__details">
        <span className="block-line line--secondary"></span>
          <h1 className="hero__heading">Humanizing your insurance.</h1>
          <p className="hero__tagline">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button className="btn btn--primary hero__btn" btnText="View plans" />
        </div>

        <img
          className="img hero__img hero__img--desktop"
          src={heroImageDesktop}
          alt="insured family picture"
        />
      </div>
    </div>
  );
}

export default Hero;
