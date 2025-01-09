import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const [apiData, setApiData] = useState([]);
  const navigate =useNavigate();

  useEffect(() => {
    axios
      .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
      .then((response) => setApiData(response.data))
      .catch((error) => toast.error("Failed to fetch user data."));
  }, []);

  const handleLogin = (values) => {
    const user = apiData.find((item) => item.email === values.email);

    if (user) {
      if (user.password === values.password) {
        toast.success("Login successful!", { position: "top-center" });
        navigate('/')
      } else {
        toast.error("Incorrect password", { position: "top-center" });
      }
    } else {
      toast.error("Email not found. Please register first.", { position: "top-center" });
    }
  };

 

  return (
    <div className="login-bg">
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form className="login-form shadow-lg p-4 rounded-lg">
              <h1 className="text-center fw-bold mb-4">Login</h1>

              <div className="mb-4">
                <Field
                  type="email"
                  name="email"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  name="password"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="d-flex justify-content-between mt-4">
                <Link to="/signup">
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill fw-bold"
                  >
                    Sign Up
                  </button>
                </Link>
                <button type="submit" className="btn btn-success rounded-pill fw-bold">
                  Login
                </button>
                <Link to="/forgot">
                  <button
                    type="button"
                    className="btn btn-outline-warning rounded-pill fw-bold"
                  >
                    Forgot Password
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
