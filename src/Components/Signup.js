import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  num: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("https://66f0f85341537919154f06e7.mockapi.io/signup", values)
      .then(() => {
        toast.success("Signup Successful");
        resetForm();
        navigate('/login')
      })
      .catch((error) => {
        toast.error("Error during signup. Please try again.");
      });
  };


  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-heading">Sign Up</h1>
        <Formik
          initialValues={{
            name: "",
            num: "",
            email: "",
            password: "",
            repassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="signup-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Full Name"
                />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="num" className="form-label">Mobile Number</label>
                <Field
                  type="text"
                  name="num"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                />
                <ErrorMessage name="num" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="repassword" className="form-label">Confirm Password</label>
                <Field
                  type="password"
                  name="repassword"
                  className="form-control"
                  placeholder="Re-enter Password"
                />
                <ErrorMessage name="repassword" component="div" className="text-danger" />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-signup">Sign Up</button>
              </div>

              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link></p>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
