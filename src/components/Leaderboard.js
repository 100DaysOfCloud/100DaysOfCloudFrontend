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
                        name={user.full_name}
                        githubProfile={user.github_username}
                        githubScore={user.github_score}
                        githubStreak={user.github_streak}
                        twitterProfile={user.twitter_username}
                        twitterScore={user.twitter_score}
                        twitterStreak={user.twitter_streak}
                        linkedinProfile={user.linkedin_profile}
                        avatarImage={user.avatar_image}
                        index={index}
                    />
                );
            })}
        </div>
    );
}
