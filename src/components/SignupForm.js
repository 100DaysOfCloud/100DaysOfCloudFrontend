import React from 'react';

import '../styles.css';

export default function Form() {
    return (
        <span className='flex justify-center'>
            <form className='max-w-2xl'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                            for='grid-first-name'>
                            First Name
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            id='grid-first-name'
                            type='text'
                            placeholder='Jane'
                        />
                        <p className='text-red-500 text-xs italic'>
                            Please fill out this field.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <label
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                            for='grid-last-name'>
                            Last Name
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-last-name'
                            type='text'
                            placeholder='Doe'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <label
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                            for='grid-username'>
                            Username
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-username'
                            type='text'
                            placeholder='AwesomeCloudJourneyer'
                        />
                        <p className='text-gray-600 text-xs italic'>
                            You will use this for your logins
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <label
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                            for='grid-email'>
                            E-Mail
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-email'
                            type='email'
                            placeholder='me@example.com'
                        />
                        <p className='text-gray-600 text-xs italic'>
                            Make sure it is a real one!
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <label
                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                            for='grid-password'>
                            Password
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-password'
                            type='password'
                            placeholder='******************'
                        />
                        <p className='text-gray-600 text-xs italic'>
                            Make it as long and as crazy as you'd like
                        </p>
                    </div>
                </div>
            </form>
        </span>
    );
}
