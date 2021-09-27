import React from "react";

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
        //   email: "",
          password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
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
                    <h1>Login</h1>
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    {/* <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label> */}
                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
};

export default LoginForm;