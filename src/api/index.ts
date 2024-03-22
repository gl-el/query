import { NewPostData, PostProps } from '@api/common/types';

import { API_BASE, ITEMS_PER_PAGE } from '../utils/consts';

async function returnJSON<T extends object>(response: Response) {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: T = await response.json();

    return data;
}

export async function getPosts(page: number) {
    const res = await fetch(`${API_BASE}/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`);
    return returnJSON<PostProps[]>(res);
}

export async function postPost(data: NewPostData) {
    const res = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return returnJSON<PostProps>(res);
}
