import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        },

        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render(){
        return (
            <div className="signup">
                <h2>Sign up</h2>
                <form>
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
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
                    <button onClick={this.handleSubmit}>Sign up</button>

                    <ul>
                        {this.props.errors.map((error, i) => 
                            <li key={i}>{error}</li>)}
                    </ul>

                    <Link to='/login'>Login instead</Link>
                </form>
            </div>
        )
    }
};

export default SignUpForm;