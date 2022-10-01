import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../utils/hooks/useForm";

const Register = ({ handleRegister, isLoading }) => {
  const { values, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    handleRegister({ email, password });
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Sign up</h2>
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="auth-form__input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="auth-form__input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />

        <div className="auth-form__footer">
          <div className="auth-form__footer-wrapper">
            <button type="submit" className="auth-form__submit-button">
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            <p className="auth-form__footer-text">
              Already a member?{" "}
              <Link to="/signin" className="auth-form__footer-link">
                Log in here!
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
