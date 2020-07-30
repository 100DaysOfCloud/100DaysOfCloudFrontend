import React from 'react';

import ArticleThumbnail from './ArticleThumbnail';

export default function FeaturedArticle(props) {
    return (
        <div className="pb-8">
            <h2 className="text-2xl font-bold border-b-2 border-gray-900 mb-4">
                Featured Article
            </h2>
            <ArticleThumbnail />
        </div>
    );
}
