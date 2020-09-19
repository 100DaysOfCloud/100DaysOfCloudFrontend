import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// zzz
import {
  useAuthFunctions,
} from "../auth";

export default function AccountDropdown() {
    const [clicked, setClicked] = useState(false);

    // zzz
    const { logout } = useAuthFunctions();

    // Handles clicking on the profile image
    function handleClick() {
        setClicked((previousClicked) => !previousClicked);
    }

    // Handles clicking anywhere outside of the dropdown menu to close it
    function handleClose() {
        setClicked(false);
    }

    // Handles clicking ESC to close the dropdown menu
    function escFunction(event) {
        if (event.keyCode === 27) setClicked(false);
    }

    // On component mount, adds the ESC handler
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return document.removeEventListener('keydown', escFunction, false);
    });

    return (
        <div className='relative'>
            <button
                className={
                    'relative z-1 block h-16 w-16 rounded-full overflow-hidden border-2 focus:outline-none' +
                    (clicked ? ' focus:border-gray-500' : '')
                }
                onClick={handleClick}>
                <img
                    className='h-full w-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
                    alt='Your profile'
                />
            </button>
            <button
                onClick={handleClose}
                className={
                    clicked
                        ? 'fixed inset-0 h-full w-full cursor-default focus:outline-0'
                        : 'hidden '
                }
                tabIndex='-1'
                aria-label='Exit dropdown menu'
            />
            <div
                className={
                    (clicked ? 'block ' : 'hidden ') +
                    'bg-gray-200 w-48 py-2 mt-4 rounded-lg shadow-md absolute right-0 flex flex-col z-10'
                }>
                <Link href='/settings'>
                    <div className='dropdown-entry hover:bg-gray-400'>
                        Account settings
                    </div>
                </Link>
                <Link href='/'>
                    <div className='dropdown-entry hover:bg-gray-400'
                        onClick={() => logout()} >
                        Log out
                    </div>
                </Link>
            </div>
        </div>
    );
}
