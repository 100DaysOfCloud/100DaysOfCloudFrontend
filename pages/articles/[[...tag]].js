import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import ArticleThumbnail from '../../components/ArticleThumbnail';
import Layout from '../../components/Layout';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function User(props) {
    const { query } = useRouter();

    let tag;

    if (query.length == 0) {
        tag = '';
    } else {
        tag = query.tag;
    }

    const { data, error } = useSWR(
        () => `/api/articles${tag ? '/' + tag : ''}`,
        fetcher
    );

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <Layout title={(query.tag ? query.tag : 'All') + ' Articles'}>
                <div className='flex justify-between section-title'>
                    <h2 className=''>
                        {query.tag ? query.tag : 'All'} articles
                    </h2>
                    <span>{data.length} articles available</span>
                </div>

                <div className='grid grid-cols-3 gap-8'>
                    {data.map((article, index) => (
                        <ArticleThumbnail
                            title={article.title}
                            subtitle={article.subtitle}
                            image={article.image}
                            key={article.id + index}
                        />
                    ))}
                </div>
            </Layout>
        </div>
    );
}
