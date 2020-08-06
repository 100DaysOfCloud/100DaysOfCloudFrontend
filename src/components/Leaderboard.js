import React from 'react';

import LeaderboardEntry from './LeaderboardEntry';

import { users } from '../data/users1.json';

export default function Leaderboard() {
    return (
        <div>
            <div className="grid grid-cols-12 items-center justify-center relative text-md font-bold">
                <div className="col-span-9"></div>
                <p className="col-span-1 mx-auto">GitHub Streak</p>
                <p className="col-span-1 mx-auto">Twitter Streak</p>
                <p className="col-span-1 mx-auto">Total Score</p>
            </div>
            {users.map((user, index) => {
                return (
                    <LeaderboardEntry
                        key={
                            user.github_username
                                ? user.github_username
                                : user.twitter_username
                        }
                        index={index}
                        user={user}
                    />
                );
            })}
        </div>
    );
}
