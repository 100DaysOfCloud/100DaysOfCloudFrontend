import React, { useState } from 'react';

import Layout from '../../components/Layout';
import User from '../../components/User';

import { useRouter } from 'next/router';

export default function UserPage() {
    const { query } = useRouter();

    const userID = query.id;

    const [name, setName] = useState('');

    return (
        <Layout title={name}>
            <User id={userID} setName={setName} />
        </Layout>
    );
}
