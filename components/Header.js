import React, { useState } from 'react';
import Link from 'next/link';
import AccountDropdown from './AccountDropdown';

export default function Header(props) {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className='pt-10 max-w-8xl m-auto'>
            <div className='flex items-center justify-between'>
                <img
                    className='h-32'
                    src='./banner.png'
                    alt='#100DaysOfCloud Logo'
                />
                <div className='flex items-center'>
                    {/* <Link href='/journeyers' className='ml-10 text-xl'> */}
                    <p className='ml-10 text-xl'>Journeyers</p>
                    <p className='ml-10 text-xl'>Leaderboard</p>
                    <p className='ml-10 text-xl'>Blog</p>
                    <p className='ml-10 text-xl'>Rules</p>
                    <p className='ml-10 text-xl'>FAQs</p>
                    {loggedIn ? (
                        <span className='ml-10'>
                            <AccountDropdown />
                        </span>
                    ) : (
                        <span className='px-4 py-2 bg-gray-800 text-white rounded-lg'>
                            Log In
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
