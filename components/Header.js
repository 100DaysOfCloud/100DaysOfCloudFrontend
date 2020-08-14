import React, { useState } from 'react';
import Link from 'next/link';
import AccountDropdown from './AccountDropdown';

export default function Header(props) {
    const [loggedIn, setLoggedIn] = useState(true);

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
