import React from 'react';

import Slider from 'react-slick';

import ArticleThumbnail from './ArticleThumbnail';

export default function NewsCarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };

    return (
        <div className='pb-8'>
            <h2 className='section-title'>{props.category}</h2>
            <Slider {...settings}>
                <ArticleThumbnail provider='medium' />
                <ArticleThumbnail provider='dev' />
                <ArticleThumbnail provider='medium' />
                <ArticleThumbnail provider='medium' />
                <ArticleThumbnail provider='dev' />
                <ArticleThumbnail provider='medium' />
            </Slider>
        </div>
    );
}
