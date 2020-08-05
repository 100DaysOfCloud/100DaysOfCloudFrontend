import React from 'react';

import LeaderboardEntry from './LeaderboardEntry';

import { users } from '../data/users1.json';

export default function Leaderboard() {
    return (
        <div>
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
