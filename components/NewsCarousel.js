import React from 'react';

import Slider from 'react-slick';

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

export default function NewsCarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };

    const SLIDES = 5;

    const { data, error } = useSWR(
        () => `/api/articles/${props.category}/?limit=${SLIDES}`,
        fetcher
    );

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className='pb-8'>
            <h2 className='section-title'>{props.category}</h2>
            <Slider {...settings}>
                {data.map((article, index) => (
                    <ArticleThumbnail
                        title={article.title}
                        subtitle={article.subtitle}
                        image={article.image}
                        key={article.id + index}
                    />
                ))}
            </Slider>
        </div>
    );
}
