import Head from 'next/head';
import { useRouter } from 'next/router';

import { PostProps } from '@api/common/types';
import { usePosts } from '@api/posts/usePosts';

import Pagination from '@components/Pagination';
import PostPreview from '@components/PostPreview';
import { useState } from 'react';

export default function IndexPage({ initial }: { initial: PostProps[] }) {
    const [statePage, setStatePage] = useState(1)
    const { data, isLoading, isError } = usePosts(statePage, initial);

    const handlePageChange = (newPage: number) => {
        if (statePage - 1 < 0) {
            return;
        }
        setStatePage((state) => state = newPage);
    }

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <main css={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <h1 css={{ textAlign: 'center', marginBottom: 20 }}>Posts from json placeholder</h1>
                {isLoading && <p>Loading..</p>}
                {isError && <p>Error happened</p>}
                <ul
                    css={{
                        flexGrow: 1,
                        listStyle: 'none',
                        width: '50%',
                        margin: '0 auto 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}
                >
                    {data?.map(item => (
                        <li key={item.id}>
                            <PostPreview {...item} />
                        </li>
                    ))}
                </ul>
                <Pagination page={statePage} onChange={handlePageChange} />
            </main>
        </>
    );
}
