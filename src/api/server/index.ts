import { API_BASE, ITEMS_PER_PAGE } from '@utils/consts';

import { PostProps } from '@api/common/types';

async function returnJSON<T extends object>(response: Response) {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: T = await response.json();

    return data;
}

export async function getPostsServer(page: number) {
    const res = await fetch(`${API_BASE}/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`);
    return returnJSON<PostProps[]>(res);
}

export async function getPostServer(id: string) {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    return returnJSON<PostProps>(res);
}
