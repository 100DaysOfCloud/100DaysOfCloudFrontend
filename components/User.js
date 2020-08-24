import React, { useState } from 'react';

import { ProfileImage } from './subcomponents/ProfileComponents';

import { AiOutlineBug } from 'react-icons/ai';

import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function User({ id, setName }) {
    const { data, error } = useSWR(() => id && `/api/users/${id}`, fetcher);

    if (error) {
        setName('User not found!');
        return (
            <div className='my-42 text-2xl text-center flex flex-col items-center'>
                <AiOutlineBug size={64} />
                The user was not found!
            </div>
        );
    }

    if (!data) return <div>Loading...</div>;

    setName(data.name);

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <ProfileImage
                    avatar={data.avatarImage}
                    name={data.name}
                    id={data.githubProfile}
                    link={false}
                />
                <p className='text-2xl font-bold'>{data.name}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>{data.bio}</p>
                <p>{data.githubProfile}</p>
                <p>{data.twitterProfile}</p>
            </div>
        </div>
    );
}
