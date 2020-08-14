import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
    return (
        <div className='w-5/6 m-auto'>
            <Header />
            <div className='section-title'>
                <h2>Top Journeyers</h2>
            </div>
            <Leaderboard />
            <Footer />
        </div>
    );
}
