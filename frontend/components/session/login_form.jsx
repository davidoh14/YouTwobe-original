import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        //   username: "",
          email: "",
          password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    render() {  
        return (
            <div className="login">
                <form>
                    <h1>Sign in</h1>
                    {/* <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label> */}
                    <label>Email:
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Next</button>

                    <ul>
                        {this.props.errors.map((error, i) => 
                            <li key={i}>{error}</li>)}
                    </ul>

                    <Link to='/signup'>Create account</Link>
                </form>
            </div>
        )
    }
};

export default LoginForm;