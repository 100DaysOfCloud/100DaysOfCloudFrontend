import React, { useState } from 'react';

import { ProfileImage } from './subcomponents/ProfileComponents';
import LeaderboardScores from './subcomponents/LeaderboardScores';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function LeaderboardEntry(props) {
    const {
        name,
        githubScore,
        githubStreak,
        twitterScore,
        twitterStreak,
        avatarImage,
    } = props.user;

    const scores = {
        githubScore,
        githubStreak,
        twitterScore,
        twitterStreak,
    };

    const index = props.index;

    return (
        <div className='grid grid-cols-6 items-center justify-center relative text-2xl'>
            <div className='col-span-1'>#{index + 1}</div>
            <div className='mx-auto col-span-1'>
                <ProfileImage avatar={avatarImage} name={name} size='small' />
            </div>
            <div className='mx-auto text-lg col-span-2'>{name}</div>
            <div className='col-span-2'>
                <LeaderboardScores name={name} scores={scores} />
            </div>
        </div>
    );
}
