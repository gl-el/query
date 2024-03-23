// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { PostProps } from '@api/common/types';
import { getPostsServer } from '@api/server';


interface ErrorResponse {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<PostProps[] | ErrorResponse>) {
    const query = req.query;

    const page = query.page ? Number(query.page) : 1;

    getPostsServer(page)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ error: err.message }));
}
