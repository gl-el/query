import Head from 'next/head';
import { useRouter } from 'next/router';

import { usePost } from '@api/posts/usePost';

export default function PostPage() {
    const router = useRouter();
    const id = router.query.id as string;
    const { data, isLoading, isError } = usePost(id);
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <main>
                <h1>post details</h1>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error happened</p>}
                <button onClick={() => router.back()}>Go back</button>
                <section>
                    <h2>{data?.title}</h2>
                    <p>{data?.body}</p>
                </section>
            </main>
        </>
    );
}
