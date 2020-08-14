import Head from 'next/head';

import React from 'react';

import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleThumbnail from '../components/ArticleThumbnail';
import NewsCarousel from '../components/NewsCarousel';
import Footer from '../components/Footer';
import HomeLeaderboard from '../components/HomeLeaderboard';

export default function Home() {
    return (
        <div className='w-5/6 m-auto'>
            <Head>
                <title>#100DaysOfCloud</title>
                <link rel='icon' href='/favicon.png' />
            </Head>

            <Header />

            <main>
                <div className='grid grid-cols-10 gap-8'>
                    <div className='col-span-2'>
                        <div className='section-title'>Tags</div>
                    </div>
                    <div className='col-span-5'>
                        <FeaturedArticle />
                        <NewsCarousel category='AWS' />
                        <NewsCarousel category='Azure' />
                        <NewsCarousel category='GCP' />
                    </div>
                    <div className='col-span-3'>
                        <HomeLeaderboard />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
