import { NewPostData, PostProps } from '@api/common/types';

import { LOCAL_API_BASE } from '../utils/consts';

async function returnJSON<T extends object>(response: Response) {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: T = await response.json();

    return data;
}

export async function getPosts(page: number) {
    const res = await fetch(`${LOCAL_API_BASE}posts?page=${page}`);
    return returnJSON<PostProps[]>(res);
}

export async function postPost(data: NewPostData) {
    const res = await fetch(`${LOCAL_API_BASE}posts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return returnJSON<PostProps>(res);
}
