import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
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
                <div className='signup-title'>YouTwobe</div>
                <div className='signup-title2'>Sign</div>
                <form>
                    <div>
                        <input 
                            type="text"
                            value={this.state.firstname}
                            onChange={this.update('firstname')}
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            value={this.state.lastname}
                            onChange={this.update('lastname')}
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </div>
                    <div>
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </div>
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