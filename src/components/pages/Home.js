import React, { Component } from "react";
import firebase from '../../firebase';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      userExists: false,
      userID: ""
    };
  }


  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setState({
          userExists: true,
          userID: result.user.uid
        })
        console.log(result.user.uid)
        console.log(this.state.userExists)
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
        {this.state.userExists === true ?
          <div>welcome {this.state.userID}</div>

          :

          <div>
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
        }

      </div>
    )
  }
}

export default Home;
