import { useQuery } from '@tanstack/react-query';

import { PostProps } from '@api/common/types';
import { getPost } from '@api/index';

export function usePost(id: string) {
    return useQuery<PostProps, Error>({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
    });
}
