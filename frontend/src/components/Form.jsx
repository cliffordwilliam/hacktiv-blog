import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({ title, fields, extraLink, callback }) {
  const [formData, setFormData] = useState({});

  const updateState = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const callCallback = (e) => {
    e.preventDefault();
    callback && callback(formData);
  };

  return (
    <main className="cc">
      <form className="card p2 vf w6" onSubmit={callCallback}>
        <h2>{title}</h2>
        {extraLink && (
          <p>
            {extraLink.text}
            <Link className="ac" to={extraLink.to}>
              {extraLink.linkText}
            </Link>
          </p>
        )}
        {fields.map((field) => (
          <label key={field.name} className="wf" htmlFor={field.name}>
            {field.label}:
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={updateState}
            />
          </label>
        ))}
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
