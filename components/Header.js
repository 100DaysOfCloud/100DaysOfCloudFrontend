import React, { useState, useContext } from 'react';
import Link from 'next/link';
import AccountDropdown from './AccountDropdown';

import { AuthContext } from '../pages/_app';

export default function Header(props) {
    const { isAuthenticated, user, token } = useContext(AuthContext);

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
                        <span className='ml-10 text-xl cursor-default hover:underline'>
                            Journeyers
                        </span>
                    </Link>
                    <Link href='/leaderboard'>
                        <span className='ml-10 text-xl cursor-default hover:underline'>
                            Leaderboard
                        </span>
                    </Link>
                    <Link href='/rules'>
                        <span className='ml-10 text-xl cursor-default hover:underline'>
                            Rules
                        </span>
                    </Link>
                    <Link href='/faqs'>
                        <span className='ml-10 text-xl cursor-default hover:underline'>
                            FAQs
                        </span>
                    </Link>
                    <a href='https://blog.100daysofcloud.com' target='#'>
                        <span className='ml-10 text-xl cursor-default hover:underline'>
                            Blog
                        </span>
                    </a>
                    {isAuthenticated ? (
                        <span className='ml-10'>
                            <AccountDropdown />
                        </span>
                    ) : (
                        <button
                            className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg ml-10'
                            type='button'>
                            <Link href='/login'>Log In</Link>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
