import React from "react";
import Navbar from "./MyNavbar";
import { useEffect, useRef } from "react";
import { Formik } from "formik";
import { SignupSchema } from "../ValidationSchema/SignupSchema";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Signup = () => {
  const inputRef = useRef();
  useEffect(() => inputRef.current && inputRef.current.focus());
  return (
    <>
      <Navbar />
      <h1>Welcome, Please Sign Up to use our Fire Detection Application</h1>
      <Card
        style={{
          backgroundColor: "#e9e9e9",
          boxShadow: "25px 25px 50px -12px rgb(0 0 0 / 0.25)",
          border: "none",
          padding: "1%",
          marginLeft: "40%",
          marginRight: "40%",
          marginTop: "5%",
        }}
      >
        <Card.Body>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={SignupSchema}
          >
            {({ handleSubmit, handleChange, touched, errors, values }) => (
              <Form>
                <Form.Group>
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    size="sm"
                    name="firstName"
                    value={values.firstName}
                    placeholder="Enter your First name"
                    onChange={handleChange}
                    ref={inputRef}
                    isInvalid={touched.firstName && errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    size="sm"
                    name="lastName"
                    value={values.lastName}
                    placeholder="Enter your First name"
                    onChange={handleChange}
                    ref={inputRef}
                    isInvalid={touched.lastName && errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center mt-3">
                  <Button color="primary" size="sm" onClick={handleSubmit}>
                    Sign up
                  </Button>
                </div>
                <div className="text-left mt-3">
                  Already have an account? <Link to="/signin">Sign in</Link>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
};
export default Signup;
