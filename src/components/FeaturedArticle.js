import React, { Component } from 'react';

import ArticleThumbnail from './ArticleThumbnail';

export default class FeaturedArticle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pb-8">
                <h2 className="text-2xl font-bold border-b-2 border-gray-900 mb-4">
                    Featured Article
                </h2>
                <ArticleThumbnail />
            </div>
        );
    }
}
