import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function saveToken(data) {
    localStorage.setItem("token", data.access_token);
    navigate("/");
  }
  const postLogin = (formData) => {
    const { email, password } = formData;
    dispatch(
      request({
        method: "POST",
        url: `${c.baseUrl}/apis/login`,
        options: {
          data: {
            email,
            password,
          },
        },
        isLoader: true,
        isOk: true,
        callback: saveToken,
      })
    );
  };

  const fields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];

  const extraLink = {
    text: "Don't have an account? ",
    to: "/register",
    linkText: "Sign Up",
  };

  return (
    <main className="cc">
      <Form
        title="Login"
        fields={fields}
        extraLink={extraLink}
        callback={postLogin}
      />
    </main>
  );
}
