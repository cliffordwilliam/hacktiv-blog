import React from "react";
import Carousel from "./Carousel";

export default function Hero({ subtitle, content, isCarousel }) {
  const con = isCarousel ? (
    <Carousel slides={content} id={1} />
  ) : (
    <img src={content.src} alt={content.alt} />
  );
  return (
    <section className="hero rel">
      <div className="c z2 p1 tw">
        <h2 className="hero-title" aria-label="Hi! I'm a developer">
          Hi! I'm a&nbsp;<span className="typewriter"></span>
        </h2>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
      <div className="bg">{con}</div>
    </section>
  );
}
