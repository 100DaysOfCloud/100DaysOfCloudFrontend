import React, { Component } from 'react';

import Slider from 'react-slick';

import ArticleThumbnail from './ArticleThumbnail';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class NewsCarousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3,
            centerMode: true,
        };

        return (
            <div className="pb-8">
                <h2 className="text-2xl font-bold border-b-2 border-gray-900 mb-4">
                    {this.props.category}
                </h2>
                <Slider {...settings}>
                    <ArticleThumbnail provider="medium" />
                    <ArticleThumbnail provider="medium" />
                    <ArticleThumbnail provider="medium" />
                    <ArticleThumbnail provider="medium" />
                    <ArticleThumbnail provider="medium" />
                    <ArticleThumbnail provider="medium" />
                </Slider>
            </div>
        );
    }
}
