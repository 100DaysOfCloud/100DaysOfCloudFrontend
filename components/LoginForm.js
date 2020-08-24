import React from 'react';

import Link from 'next/link';

import { FaHome } from 'react-icons/fa';

export default function LoginForm() {
    return (
        <div className='w-1/2 mx-auto mt-20'>
            <form method='POST'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-2xl font-bold'>Sign-in</h1>
                    <Link href='/'>
                        <div className='flex items-center hover:underline cursor-pointer'>
                            <p className='text-xl mr-2 hidden lg:block'>
                                Return to homepage
                            </p>
                            <FaHome
                                size={32}
                                className='text-gray-700 hover:text-gray-900'
                            />
                        </div>
                    </Link>
                </div>
                <div className='bg-gray-200 py-8'>
                    <div className='w-3/4 mx-auto mb-8'>
                        <label
                            for='username'
                            class='block text-gray-700 text-sm font-bold mb-2'>
                            Username
                        </label>
                        <input
                            id='username'
                            className='rounded w-full py-2 px-4 text-gray-700 leading-tight'
                            placeholder='you@example.com'
                        />
                    </div>
                    <div className='w-3/4 mx-auto mb-8'>
                        <label
                            for='password'
                            class='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input
                            id='password'
                            className='rounded w-full py-2 px-4 text-gray-700 leading-tight'
                            placeholder='************'
                        />
                    </div>
                    <div className='w-3/4 mx-auto mb-8'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <label
                                    className='block text-gray-700 font-bold'
                                    for='remember'>
                                    <input
                                        className='leading-tight'
                                        type='checkbox'
                                        id='remember'
                                        name='remember'
                                    />
                                    <span className='ml-2 text-sm'>
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div>
                                <a
                                    className='font-bold text-sm text-blue-700 hover:text-blue-900'
                                    href='#password-request'>
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='mb-8 text-center'>
                        <button
                            className='transition duration-500 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type='submit'>
                            Login
                        </button>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='flex flex-col items-center justify-between'>
                            <div>
                                <span>New to the challenge?</span>
                            </div>
                            <div>
                                <a
                                    className='font-bold text-sm text-blue-700 hover:text-blue-900'
                                    href='#password-request'>
                                    Sign-up today!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
