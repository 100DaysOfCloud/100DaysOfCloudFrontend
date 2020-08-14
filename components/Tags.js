import React from 'react';

import Link from 'next/link';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function Tags(props) {
    const { data, error } = useSWR(() => `/api/articles/tags`, fetcher);

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <div className='section-title'>Tags</div>
            {data.map((item, index) => (
                <div key={item.tag}>
                    <Link href={`/articles/${item.tag}`}>
                        {`${item.tag} (${item.count})`}
                    </Link>
                </div>
            ))}
        </div>
    );
}
