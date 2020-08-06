import React, { useState } from 'react';

import { ProfileImage } from './ProfileBadge/ProfileComponents';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function LeaderboardEntry(props) {
    const [tooltipShown, setTooltipShown] = useState(false);

    const {
        name,
        githubProfile,
        githubScore,
        githubStreak,
        twitterProfile,
        twitterScore,
        twitterStreak,
        linkedinProfile,
        avatarImage,
    } = props.user;

    const index = props.index;

    const totalScore = githubScore + twitterScore;

    return (
        <div className="grid grid-cols-12 items-center justify-center relative text-2xl">
            <div className="col-span-1">#{index + 1}</div>
            <div className="mx-auto col-span-2">
                <ProfileImage
                    avatar={avatarImage}
                    name={name}
                    size={index === 0 ? '' : 'small'}
                />
            </div>
            <div className="mx-auto text-2xl col-span-3">{name}</div>
            <div className="flex mx-auto col-span-3">
                <a
                    href={`https://github.com/${githubProfile}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href={`https://twitter.com/${twitterProfile}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4"
                >
                    <FaTwitter size={32} />
                </a>
                <a
                    href={linkedinProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4"
                >
                    <FaLinkedin size={32} />
                </a>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-3">
                    <div className="mx-auto">{githubStreak}</div>
                    <div className="mx-auto">{twitterStreak}</div>
                    <div className="mx-auto">
                        <div
                            role="presentation"
                            onMouseEnter={() => setTooltipShown(true)}
                            onMouseLeave={() => setTooltipShown(false)}
                        >
                            {totalScore}
                            {tooltipShown && (
                                <div className="absolute z-10 right-0 mt-5 bg-gray-500 rounded-lg p-4">
                                    <div>
                                        <p className="mx-auto">
                                            GitHub Score: {githubScore}
                                        </p>
                                        <p className="mx-auto">
                                            Twitter Score: {twitterScore}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
