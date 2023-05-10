import React from "react";
import Navbar from "./MyNavbar";
import { Formik } from "formik";
import "../CSS/Signin.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SigninSchema } from "../ValidationSchema/SigninSchema";
const Signin = () => {
  const inputRef = useRef();
  useEffect(() => inputRef.current && inputRef.current.focus());
  return (
    <>
      <Navbar />
      <h1 >Sign In into Fire Detection Application</h1>
      <Card id="card"
        style={{
          backgroundColor: "#e9e9e9",
          boxShadow: "25px 25px 50px -12px rgb(0 0 0 / 0.25)",
          border: "none",
          padding: "1%",
          marginLeft:"40%",
          marginRight:"40%",
          marginTop:"5%"
        }}
      >
        <Card.Body>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={SigninSchema}
          >
            {({ handleSubmit, handleChange, touched, errors, values }) => (
              <Form>
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
                    Sign In
                  </Button>
                </div>
                <div className="text-left mt-3">
               <Link to="/signin" >Forgot Password ?</Link>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </>
  );
};
export default Signin;
