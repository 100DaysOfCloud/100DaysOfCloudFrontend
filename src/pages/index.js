import React from 'react';

import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleThumbnail from '../components/ArticleThumbnail';
import NewsCarousel from '../components/NewsCarousel';
import Footer from '../components/Footer';

import '../styles.css';

export default function Home() {
    return (
        <div className="max-w-8xl m-auto">
            <Header />

            <div className="site">
                <div className="site-content">
                    <div className="grid grid-cols-10 gap-8">
                        <div className="col-span-2">
                            <ArticleThumbnail provider="medium" />
                        </div>
                        <div className="col-span-5">
                            <FeaturedArticle />
                            <NewsCarousel category="AWS" />
                            <NewsCarousel category="Azure" />
                            <NewsCarousel category="Google Cloud" />
                        </div>
                        <div className="col-span-3">
                            <ArticleThumbnail provider="dev" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
