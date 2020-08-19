import React from 'react';

import Layout from '../components/Layout';

import Tags from '../components/Tags';
import FeaturedArticle from '../components/FeaturedArticle';
import NewsCarousel from '../components/NewsCarousel';
import HomeLeaderboard from '../components/HomeLeaderboard';
import RecentUsers from '../components/RecentUsers';

export default function Home() {
    return (
        <div>
            <Layout>
                <div className='grid grid-cols-10 gap-8'>
                    <div className='col-span-2'>
                        <Tags />
                    </div>
                    <div className='col-span-5'>
                        <FeaturedArticle />
                        <NewsCarousel category='AWS' />
                        <NewsCarousel category='Azure' />
                        <NewsCarousel category='GCP' />
                    </div>
                    <div className='col-span-3'>
                        <HomeLeaderboard />
                        <RecentUsers />
                    </div>
                </div>
            </Layout>
        </div>
    );
}
