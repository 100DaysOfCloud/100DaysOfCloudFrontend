import React from 'react';

import ArticleThumbnail from './ArticleThumbnail';

import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function FeaturedArticle(props) {
    const { data, error } = useSWR(() => `/api/articles/`, fetcher);

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    const { title, subtitle, image } = data[0];

    return (
        <div className='pb-8'>
            <h2 className='section-title'>Featured Article</h2>
            <ArticleThumbnail title={title} subtitle={subtitle} image={image} />
        </div>
    );
}
