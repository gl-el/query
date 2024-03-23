import { useQuery } from '@tanstack/react-query';

import { PostProps } from '@api/common/types';

import { getPosts } from '@api/index'

export function usePosts(page: number) {
    return useQuery<PostProps[], Error>({
        queryKey: ['posts', page],
        queryFn: () => getPosts(page),
    });
}
