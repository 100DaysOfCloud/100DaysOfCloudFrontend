import React, { useState, useContext } from 'react';
import Link from 'next/link';
import AccountDropdown from './AccountDropdown';

import {
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
  return { props: { initialAuth } };
};

export default function Header(props) {
    // const { isAuthenticated, user, token } = useContext(AuthContext);
    const auth = useAuth(props.initialAuth);
    const { login } = useAuthFunctions();
    return (
        <div className='pt-10 m-auto'>
            <div className='flex items-center justify-between'>
                <Link href='/'>
                    <img
                        className='h-32 cursor-pointer'
                        src='/banner.png'
                        alt='#100DaysOfCloud Logo'
                    />
                </Link>
                <div className='flex items-center'>
                    <Link href='/journeyers'>
                        <a className='ml-10 text-xl hover:underline'>
                            Journeyers
                        </a>
                    </Link>
                    <Link href='/leaderboard'>
                        <a className='ml-10 text-xl hover:underline'>
                            Leaderboard
                        </a>
                    </Link>
                    <Link href='/rules'>
                        <a className='ml-10 text-xl hover:underline'>Rules</a>
                    </Link>
                    <Link href='/faqs'>
                        <a className='ml-10 text-xl  hover:underline'>FAQs</a>
                    </Link>
                    <a
                        href='https://blog.100daysofcloud.com'
                        target='#'
                        className='ml-10 text-xl hover:underline'>
                        Blog
                    </a>
                    {auth ? (
                        <span className='ml-10'>
                            <AccountDropdown />
                        </span>
                    ) : (
                        <Link href='/login'>
                            <button
                                className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg ml-10'
                                type='button'
                                onClick={() => login()} >
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
