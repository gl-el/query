import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getPost } from '@api/index';

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
        queryFn: () => getPost(postID),
    });

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
}
