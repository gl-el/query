import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getPostServer } from '@api/server';

export { default } from '@views/DetailedPostPage';

interface ServerSideContextProps {
    query: {
        id: string;
    };
}

export async function getServerSideProps(context: ServerSideContextProps) {
    const postID = context.query.id;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['post', postID],
        queryFn: () => getPostServer(postID),
    });

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
}
