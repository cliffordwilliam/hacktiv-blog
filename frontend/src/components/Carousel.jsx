import React, { useEffect, useState } from "react";

export default function Carousel({ slides, id }) {
  const [left, setLeft] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    document.getElementById(`c${id}`).style.left = `${
      left * document.getElementById(`c${id}`).offsetWidth
    }px`;
  }, [left]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isMouseOver) {
        setLeft((prevLeft) => (prevLeft - 1) % slides.length);
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length, isMouseOver]);

  return (
    <div
      className="rel hf oh"
      onMouseEnter={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      {/* slidex */}
      <div id={`c${id}`} className="hf nw ng bg pn slide-con">
        {slides.map(({ src, alt }, index) => (
          <img key={index} className="slide" src={src} alt={alt} />
        ))}
      </div>
      {/* buttons */}
      <div className="hf bg p1">
        <button
          onClick={(e) => {
            e.preventDefault();
            setLeft((left + 1 - slides.length) % slides.length);
          }}
          className="mra bw"
        >
          &laquo;
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLeft((left - 1) % slides.length);
          }}
          className="bw"
        >
          &raquo;
        </button>
      </div>
      <div className="hf bg p1 alb cc pn">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === -left ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
