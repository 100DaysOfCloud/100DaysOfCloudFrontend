import React from 'react';

import SignupForm from '../components/SignupForm';
import BackButton from '../components/BackButton';

import '../styles.css';

export default function Login() {
    return (
        <div className='pt-10 max-w-8xl m-auto'>
            <BackButton link='/' />
            <SignupForm />
        </div>
    );
}
