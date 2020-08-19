import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProfileImage } from '../../components/subcomponents/ProfileComponents';
import Head from 'next/head';

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

export default function User(props) {
    const { query } = useRouter();

    const { data, error } = useSWR(
        () => query.id && `/api/users/${query.id}`,
        fetcher
    );

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className='w-5/6 m-auto'>
            <Head>
                <title>{data.name} | #100DaysOfCloud</title>
                <link rel='icon' href='/favicon.png' />
            </Head>

            <Header />

            <div>
                <div className='flex flex-col items-center justify-center'>
                    <ProfileImage avatar={data.avatarImage} name={data.name} />
                    <p className='text-2xl font-bold'>{data.name}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>{data.bio}</p>
                    <p>{data.githubProfile}</p>
                    <p>{data.twitterProfile}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
