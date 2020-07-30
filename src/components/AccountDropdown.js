import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

export default function AccountDropdown(props) {
    const [clicked, setClicked] = useState(false);

    // Handles clicking on the profile image
    function handleClick(previousClicked) {
        setClicked(!previousClicked);
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
        <div className="relative">
            <button
                className={
                    'relative z-10 block h-16 w-16 rounded-full overflow-hidden border-2 focus:outline-none' +
                    (clicked ? ' focus:border-gray-500' : '')
                }
                onClick={handleClick}
            >
                <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                    alt="Your profile"
                />
            </button>
            <button
                onClick={handleClose}
                className={
                    clicked
                        ? 'fixed inset-0 h-full w-full cursor-default focus:outline-0'
                        : 'hidden '
                }
                tabindex="-1"
            />
            <div
                className={
                    (clicked ? 'block ' : 'hidden ') +
                    'bg-gray-200 w-48 py-2 mt-4 rounded-lg shadow-xl absolute right-0'
                }
            >
                <Link
                    href="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                >
                    Account setting
                </Link>
                <Link
                    href="/submit"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                >
                    Submit an article
                </Link>
                <Link
                    href="/log-out"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
                >
                    Log out
                </Link>
            </div>
        </div>
    );
}
