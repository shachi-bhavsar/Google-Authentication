import React from 'react';
import GoogleSignIn from "react-google-signin";
import {GoogleLogout} from 'react-google-oauth'
    
export default class Login extends React.Component { 

    constructor(props){
        super(props)
        this.state = {
            tag : ''
        }
    }
    onSignIn(userProfile, accessToken) {
        console.log(userProfile.email)
        if(userProfile)
        {
            this.setState(
                {
                    tag : userProfile.email
                }
            ); 
        }
    }
    
    signOut() {
        this.setState(
            {
                tag : ''
            }
        );
        this.googleAuth.signOut();         
    }

    render() {
        return (
            <div>
                <div>
                <GoogleSignIn clientId="260101237603-n4a0hkmaccsdhb9i67r38g2f6ebc87gn.apps.googleusercontent.com"
                            ref={g => this.googleAuth = g}
                            onSuccess={this.onSignIn.bind(this)}
                />
                </div>
                <div>
                    {this.state.tag}
                </div>
                <div>
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this.signOut.bind(this)}
                    />
                </div>
            </div>
        )   
    }

}
