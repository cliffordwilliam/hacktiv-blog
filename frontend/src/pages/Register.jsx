import React from "react";
import Form from "../components/Form";

export default function Register() {
  const extraLink = {
    text: "Already have an account? ",
    to: "/login",
    linkText: "Login",
  };

  const postUser = (formData) => {
    console.log(formData);
  };

  const fields = [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "username", label: "Username", type: "text", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];

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
