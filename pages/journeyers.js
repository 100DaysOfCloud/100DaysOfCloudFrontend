import React from 'react';

import Layout from '../components/Layout';
import Journeyers from '../components/Journeyers';

export default function Home() {
    return (
        <div>
            <Layout title='Journeyers'>
                <div className='section-title'>
                    <h2>Journeyers</h2>
                </div>
                <Journeyers />
            </Layout>
        </div>
    );
}