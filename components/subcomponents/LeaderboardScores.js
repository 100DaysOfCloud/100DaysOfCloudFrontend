import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function LeaderboardScores({ name, scores }) {
    const totalScore = scores.githubScore + scores.twitterScore;

    return (
        <div className='grid grid-cols-3'>
            <div className='mx-auto'>{scores.githubStreak}</div>
            <div className='mx-auto'>{scores.twitterStreak}</div>
            <div className='mx-auto'>
                <div>
                    <span data-tip data-for={name}>
                        {totalScore}
                    </span>
                    <ReactTooltip
                        id={name}
                        type='info'
                        className='flex flex-col justify-center text-center'>
                        <div>GitHub Score: {scores.githubScore}</div>
                        <div>Twitter Score: {scores.twitterScore}</div>
                    </ReactTooltip>
                </div>
            </div>
        </div>
    );
}
