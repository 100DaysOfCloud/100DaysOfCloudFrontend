import React from 'react';

import Layout from '../components/Layout';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
    return (
        <div>
            <Layout title='Leaderboard'>
                <div className='section-title'>
                    <h2>Top Journeyers</h2>
                </div>
                <Leaderboard />
            </Layout>
        </div>
    );
}
