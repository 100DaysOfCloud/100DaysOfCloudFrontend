import React from 'react';

import { ProfileImage } from './subcomponents/ProfileComponents';
import ReactTooltip from 'react-tooltip';

export default function LeaderboardEntry(props) {
    const {
        name,
        githubScore,
        githubProfile,
        twitterScore,
        avatarImage,
    } = props.user;

    const totalScore = githubScore + twitterScore;

    const index = props.index;

    return (
        <div className='grid grid-cols-6 items-center justify-center text-2xl mx'>
            <div className='col-span-1'>#{index + 1}</div>
            <div className='mx-auto col-span-1'>
                <ProfileImage
                    id={githubProfile}
                    avatar={avatarImage}
                    name={name}
                    size='small'
                />
            </div>
            <div className='mx-auto text-lg col-span-3'>{name}</div>
            <div className='col-span-1 text-center'>
                <span data-tip data-for={name}>
                    {totalScore}
                </span>
                <ReactTooltip
                    id={name}
                    type='info'
                    className='flex flex-col justify-center text-center'>
                    <div>GitHub Score: {githubScore}</div>
                    <div>Twitter Score: {twitterScore}</div>
                </ReactTooltip>
            </div>
        </div>
    );
}
