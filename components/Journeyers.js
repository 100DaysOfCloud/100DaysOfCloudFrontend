import React from 'react';

import JourneyersEntry from './JourneyerEntry';

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

export default function Journeyers() {
    const { query } = useRouter();
    const { data, error } = useSWR(() => `/api/journeyers/`, fetcher);
    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            {data.map((user, index) => {
                return (
                    <JourneyersEntry
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
