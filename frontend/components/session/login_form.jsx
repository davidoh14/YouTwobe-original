import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    let guest = {
      email: "ProZD@email.com",
      password: "test",
    };
    this.props.login(guest);
  }

  render() {

    return (
      <div>
        <div className="login">
          <form>
            <h1>Login</h1>
            {/* <label>Username:
                          <input 
                              type="text"
                              value={this.state.username}
                              onChange={this.update('username')}
                          />
                      </label> */}
            <label>
              Email:
              <input
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
            <button onClick={this.demoLogin}>Guest Login</button>

            <ul>
              {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>

            <Link to="/signup">Sign up</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
