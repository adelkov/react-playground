import auth0 from 'auth0-js';

import { navigate } from "@reach/router"
import * as KJUR from "jsrsasign";
import {b64utoutf8} from "jsrsasign";

class Auth {
    // Please use your own credentials here
    auth0 = new auth0.WebAuth({
        domain: 'adelkov.eu.auth0.com',
        clientID: 'pQm6fafiLN3dgaIiG3o4PAiXqB7WsVA6',
        redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://react-blog-007.firebaseapp.com/callback',
        audience: 'https://adelkov.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid email'
    });

    login = () => {
        this.auth0.authorize();
    };

    // parses the result after authentication from URL hash
    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult, navigate);
                navigate("/home")
            } else if (err) {
                console.log(err);
                navigate("/home")
            }
        });
    };

    // Sets user details in localStorage
    setSession =  (authResult) => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        console.log(authResult);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        const payloadObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(authResult.idToken.split(".")[1]));
        localStorage.setItem('email', payloadObj.email);
        navigate("/home")
   };

    // removes user details from localStorage
    logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('email');
        // navigate to the home route
        navigate("/home")
    };

    // checks if the user is authenticated
    isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
}



export default Auth;
