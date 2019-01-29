import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "../../firebase"

class Registration extends Component {
    state = {
        email: "",
        ign: "",
        password: "",
        error: null,

    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                const registeredUser = firebase.database().ref("users/"+result.user.uid);
                const data = {
                    userID: result.user.uid,
                    email: this.state.email,
                    ign: this.state.ign
                }
                registeredUser.push(data);

                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };
    render() {
        const { email, password, ign, error } = this.state;
        return (
            <div>
                <h1>Registration</h1>
                {error ?
                    (<div>{error.message}</div>)
                    :
                    null}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="ign"
                        placeholder="Mosjoandy"
                        value={ign}
                        onChange={this.handleInputChange}
                    />
                    <button children="Register" />
                </form>

            </div>

        )
    }
}
export default withRouter(Registration);