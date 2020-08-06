import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
    return (
        <div className="max-w-8xl m-auto">
            <Header />
            <div className="flex text-2xl font-bold justify-between border-b-2 border-gray-900 mb-4">
                <h2>Top Journeyers</h2>
                <div className="flex">
                    <button className="px-2 text-2xl font-bold">
                        This Week
                    </button>
                    |
                    <button className="px-2 text-2xl font-bold">
                        All Time
                    </button>
                </div>
            </div>
            <Leaderboard />
            <Footer />
        </div>
    );
}
