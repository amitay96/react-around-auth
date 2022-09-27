import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../auth.js";
import "./styles/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      return;
    }
    auth
      .authorize(this.state.email, this.state.password)
      .then((data) => {
        if (data.jwt) {
          this.setState({ email: "", password: "" }, () => {
            this.props.handleLogin();
            this.props.history.push("/");
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="login">
        <p className="login__welcome">Log in</p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input
            required
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <label htmlFor="password">Password:</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <div className="login__button-container">
            <button
              type="submit"
              onSubmit={this.handleSubmit}
              className="login__link"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link to="/register" className="signup__link">
            Sign up here!
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
