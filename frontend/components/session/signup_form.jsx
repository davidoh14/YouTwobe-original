import React from 'react';

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
            // .then( () => this.props.history.push('/') )
    }

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    render(){
        return (
            <div className="signup">
                <h2>Sign Up!</h2>
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
                    <button onClick={this.handleSubmit}>Submit</button>
                    <ul>
                        {this.props.errors.map((error, i) => 
                            <li key={i}>{error}</li>)}
                    </ul>
                </form>
            </div>
        )
    }
};

export default SignUpForm;