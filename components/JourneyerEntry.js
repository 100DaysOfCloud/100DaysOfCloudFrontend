import React, { useState } from 'react';

import { ProfileImage } from './subcomponents/ProfileComponents';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function JourneyerEntry(props) {
    const {
        name,
        githubProfile,
        twitterProfile,
        linkedinProfile,
        avatarImage,
    } = props.user;

    const index = props.index;

    return (
        <div className='grid grid-cols-10 items-center justify-center relative text-2xl'>
            <div className='col-span-1'>#{index + 1}</div>
            <div className='mx-auto col-span-2'>
                <ProfileImage
                    id={githubProfile}
                    avatar={avatarImage}
                    name={name}
                    size={index === 0 ? 'lg' : 'md'}
                />
            </div>
            <div className='mx-auto text-2xl col-span-3'>{name}</div>
            <div className='flex mx-auto col-span-3'>
                <a
                    href={`https://github.com/${githubProfile}`}
                    target='_blank'
                    rel='noreferrer'
                    className='mx-4'>
                    <FaGithub size={32} />
                </a>
                <a
                    href={`https://twitter.com/${twitterProfile}`}
                    target='_blank'
                    rel='noreferrer'
                    className='mx-4'>
                    <FaTwitter size={32} />
                </a>
                <a
                    href={linkedinProfile}
                    target='_blank'
                    rel='noreferrer'
                    className='mx-4'>
                    <FaLinkedin size={32} />
                </a>
            </div>
        </div>
    );
}
