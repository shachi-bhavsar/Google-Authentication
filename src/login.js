import React from 'react';
import GoogleSignIn from "react-google-signin";
import {GoogleLogout} from 'react-google-oauth'
import App from './App'
export default class Login extends React.Component { 

    constructor(props){
        super(props)
        this.state = {
            tag : ''
        }
        this.onSignIn = this.onSignIn.bind(this)
        this.signOut = this.signOut.bind(this)
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
        if(this.state.tag === '')
        {
            return (
                <div>
                    <div>
                    <GoogleSignIn clientId="260101237603-n4a0hkmaccsdhb9i67r38g2f6ebc87gn.apps.googleusercontent.com"
                                ref={g => this.googleAuth = g}
                                onSuccess={this.onSignIn}
                    />
                    </div>
                    <div>
                        <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={this.signOut}
                        />
                    </div>
                </div>
            )  
        }
        else
        {
            return (
                <div>
                    <div>
                        <span>Sign in as : {this.state.tag}</span>
                        <hr/>
                    </div>
                    <div>
                        <App/>
                    </div>
                    <div>
                        <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={this.signOut}
                        />
                    </div>
                </div>
            )
        }
           
    }

}
