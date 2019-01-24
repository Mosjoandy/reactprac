import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';

class Registration extends Component {
state ={
    email: "",
    password: "",
    error: null,
    
}

}
export default withRouter(Registration);