import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ error: error });
            });
          
    };
    render() {
        const { email, password, error } = this.state;
        return (
            <div className="jumbotron text-center">
                {error ? (<div>{error.message}</div>) : null}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleInputChange}
                    />
                    <button children="Log In" />
                </form>

            </div>
        )
    }
}
export default withRouter(Login);