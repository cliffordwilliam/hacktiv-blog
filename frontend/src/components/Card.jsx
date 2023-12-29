import React from "react";

export default function Card({ title, content, imgUrl, category }) {
  return (
    <div className="card vf ng">
      <img className="hs" src={imgUrl} alt={title} />
      <div className="p1 vf f1">
        <h3 className="l1">{title}</h3>
        <p className="l3">{content}</p>
        <p className="mta">Category: {category.name}</p>
      </div>
    </div>
  );
}
