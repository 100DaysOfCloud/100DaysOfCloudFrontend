import React from 'react';

import '../styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
