import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login'
import {GoogleAPI} from 'react-google-oauth'
 
import registerServiceWorker from './registerServiceWorker';

const responseGoogle = (response) => {
    console.log(response);    
}
ReactDOM.render(<GoogleAPI clientId="260101237603-n4a0hkmaccsdhb9i67r38g2f6ebc87gn.apps.googleusercontent.com"
    onUpdateSigninStatus={responseGoogle}
    onInitFailure={(response) => {console.log(response)}} >
    <div>
        <div><Login/></div>
    </div>
    </GoogleAPI>, document.getElementById('root'));
registerServiceWorker();
