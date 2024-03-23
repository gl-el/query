// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { PostProps } from '@api/common/types';

import { API_BASE, ITEMS_PER_PAGE } from '../../utils/consts';

const getData = async (page: number) => {
    return await fetch(`${API_BASE}/posts?_limit=${ITEMS_PER_PAGE}&_page=${page}`);
};

interface ErrorResponse {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<PostProps[] | ErrorResponse>) {
    const query = req.query;

    const page = query.page ? Number(query.page) : 1;

    getData(page)
        .then(data => data.json())
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ error: err.message }));
}
