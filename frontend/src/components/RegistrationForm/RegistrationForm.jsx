import * as React from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function RegistrationForm(props) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    username: "",
    //changed
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });
  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };
  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsProcessing(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    const { data, error } = await apiClient.signUpUser({
      email: form.email,
      username: form.username,
      //changed
      firstName: form.firstName,
      lastName: form.lastName,
      password: form.password,
    });
    if (error) {
      setErrors((e) => ({ ...e, form: error }));
    }
    if (data?.user) {
      props.setUser(data.user);
      apiClient.setToken(data.token);
      navigate("/activity");
    }
    setIsProcessing(false);
  };
  return (
    <div className="registeration-form">
      <div className="container">
        <h2 className="title">Register</h2>
        {errors.form && <span className="error">{errors.form}</span>}
        {/* {Boolean(errors.form) && <span className="error">{errors.form}</span>} */}
        <br />
        <div className="inputs">
          <div className="form-input">
            <label form="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-input">
            <label form="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="your_username"
              value={form.username}
              onChange={handleOnInputChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div className="split-form-input">
            <div className="form-input">
              <input
                type="text"
                //changed
                name="firstName"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleOnInputChange}
              />
              {/*changed*/}
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-input">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleOnInputChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="form-input">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-input">
            <label for="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value={form.password_confirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && (
              <span className="error">{errors.passwordConfirm}</span>
            )}
          </div>
          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Create Account"}
          </button>
        </div>
        <div className="footer">
          <p>
            Already have an account? Login
            <span className="blank"> </span>
            <Link to="/login">here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
