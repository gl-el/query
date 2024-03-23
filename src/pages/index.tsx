import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getPostsServer } from '@api/server';

export { default } from '@views/IndexPage';

interface ServerSideContextProps {
    query: {
        page?: string;
    };
}

export async function getServerSideProps(context: ServerSideContextProps) {
    let page = 1;

    if (context.query.page) {
        page = Number(context.query.page);
    }

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['posts', page],
        queryFn: () => getPostsServer(page),
    });

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
}
