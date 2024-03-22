import Head from 'next/head';
import { useRouter } from 'next/router';

import { PostProps } from '@api/common/types';
import { usePosts } from '@api/posts/usePosts';

export default function IndexPage() {
    const router = useRouter();
    const { pathname, query } = router;
    const { page } = query as { page?: string };
    const { data, isLoading, isError } = usePosts(page ? Number(page) : 1);

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <main
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                }}
            >
                <h1>Posts from json placeholder</h1>
                {isLoading && <p>Loading..</p>}
                {isError && <p>Error happened</p>}
                {data?.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
                <div css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        disabled={Number(page) === 1}
                        onClick={() =>
                            router.push(
                                {
                                    pathname,
                                    query: { page: Number(page) > 1 ? Number(page) - 1 : 1 },
                                },
                                undefined,
                                { shallow: true }
                            )
                        }
                    >
                        Prev
                    </button>
                    <button
                        onClick={() =>
                            router.push(
                                {
                                    pathname,
                                    query: { page: page ? Number(page) + 1 : 2 },
                                },
                                undefined,
                                { shallow: true }
                            )
                        }
                    >
                        Next
                    </button>
                </div>
            </main>
        </>
    );
}
