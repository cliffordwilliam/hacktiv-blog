import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
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

  const postUser = (formData) => {
    const { username, email, password, phoneNumber, address } = formData;
    dispatch(
      request({
        method: "POST",
        url: `${c.baseUrl}/apis/add-user`,
        options: {
          data: {
            username,
            email,
            password,
            phoneNumber,
            address,
          },
        },
        isLoader: true,
        isOk: true,
        callback: postLogin,
      })
    );
  };

  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "username", label: "Username", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "phoneNumber", label: "Phone Number", type: "text" },
    { name: "address", label: "Address", type: "text" },
  ];

  const extraLink = {
    text: "Already have an account? ",
    to: "/login",
    linkText: "Login",
  };

  return (
    <main className="cc">
      <Form
        title="Register"
        fields={fields}
        extraLink={extraLink}
        callback={postUser}
      />
    </main>
  );
}
