import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../auth.js";
import * as data from "../data.js";
import "./styles/Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    auth.register(this.state.email, this.state.password).then((res) => {
      if (res) {
        this.props.history.push("/login");
      } else {
        console.log("Something went wrong.");
      }
    });
  };

  render() {
    return (
      <div className="register">
        <p className="register__welcome">Sign up</p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
          <div className="register__button-container">
            <button
              type="submit"
              onSubmit={this.handleSubmit}
              className="register__link"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="register__signin">
          <p>Already A member?</p>
          <Link to="login" className="register__login-link">
            Log in here!
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
