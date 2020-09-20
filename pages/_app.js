import React from 'react';

import '../styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";

Amplify.configure({
  Auth: {
    region: process.env.AWS_REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // example taken from https://aws-amplify.github.io/docs/js/authentication
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      // This should be the subdomain in production as the cookie should only
      // be present for the current site
      domain: process.env.AUTH_COOKIE_DOMAIN,
      // OPTIONAL - Cookie path
      path: "/",
      // OPTIONAL - Cookie expiration in days
      expires: 7,
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      // The cookie can be secure in production
      secure: false,
    },
  },
});
Auth.configure({
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid"],
    // we need the /autologin step in between to set the cookies properly,
    // we don't need that when signing out though
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "token",
  },
});

// ignoring for now.. zzz
export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default function MyApp({ Component, pageProps }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}>
            <Component {...pageProps} />;
        </AuthContext.Provider>
    );
}
