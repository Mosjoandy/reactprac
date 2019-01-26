import React from 'react';
import firebase from 'firebase';

const logOutUser = () => {
    firebase.auth().signOut();
    console.log("you've logged out")
};

const LogOut = () => {
    return <button onClick={logOutUser} children="Log Out" />;
};
export default LogOut;