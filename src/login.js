import React from 'react';
import GoogleSignIn from "react-google-signin";
import {GoogleLogout} from 'react-google-oauth'
    
export default class Login extends React.Component { 

    onSignIn(userProfile, accessToken) {
        console.log(userProfile.email)
    }
    
    signOut() {
        this.googleAuth.signOut();
    }

    render() {
        return (
            <div>
            <GoogleSignIn clientId="YOUR_CLIENT_ID"
                        ref={g => this.googleAuth = g}
                        onSuccess={this.onSignIn.bind(this)}
            />
            <div><GoogleLogout onClick={this.signOut.bind(this)}/></div> 
            </div>
        )   
    }

}