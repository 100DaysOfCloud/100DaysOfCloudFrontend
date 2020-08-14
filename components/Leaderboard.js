import React from 'react';

import LeaderboardEntry from './LeaderboardEntry';

import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function Leaderboard() {
    const { query } = useRouter();

    const { data, error } = useSWR(() => `/api/leaderboard/`, fetcher);

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <div className='grid grid-cols-12 items-center justify-center relative text-md font-bold'>
                <div className='col-span-9'></div>
                <p className='col-span-1 mx-auto'>GitHub Streak</p>
                <p className='col-span-1 mx-auto'>Twitter Streak</p>
                <p className='col-span-1 mx-auto'>Total Score</p>
            </div>
            {data.map((user, index) => {
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
