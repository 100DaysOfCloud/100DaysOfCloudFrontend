import React from 'react';
import Link from 'next/link';

const NameAndHandle = ({ name, handle, size }) => {
    return (
        <div className={`text-${size}`}>
            <p className='text-gray-900 leading-none cursor-default'>{name}</p>
            <a
                href={`https://twitter.com/${handle}`}
                target='blank'
                className='text-gray-600 hover:underline'>
                {`@${handle}`}
            </a>
        </div>
    );
};

const ProfileImage = ({ id, name, avatar, size }) => {
    const sizeMappings = {
        sm: 20,
        md: 32,
        lg: 40,
        xl: 48,
    };

    return (
        <div
            className={`rounded-full overflow-hidden shadow-lg h-${sizeMappings[size]} w-${sizeMappings[size]}`}>
            <Link href={`/users/${id}`}>
                <img
                    src={avatar}
                    alt={`This is ${name}!`}
                    className='object-cover object-center cursor-pointer'
                />
            </Link>
        </div>
    );
};

const ProfileBio = ({ bio, size }) => {
    return (
        <div className=''>
            <p className={`text-${size} text-gray-700 text-left`}>{bio}</p>
        </div>
    );
};

export { NameAndHandle, ProfileImage, ProfileBio };
