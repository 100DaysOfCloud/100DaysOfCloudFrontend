import React from 'react';

import { ProfileImage } from './subcomponents/ProfileComponents';

import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function HomeLeaderboard(props) {
    const ENTRIES = 10;

    const { data, error } = useSWR(
        () => `/api/users/recent?limit=${ENTRIES}`,
        fetcher
    );

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <div className='section-title'>New Journeyers</div>
            <div className='grid grid-rows-5 grid-cols-2'>
                {data.map((user, index) => {
                    return (
                        <div className='flex mb-2 items-center'>
                            <ProfileImage
                                avatar={user.avatarImage}
                                name={user.name}
                                size='small'
                                key={user.id}
                            />
                            <p className='ml-2'>{user.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
