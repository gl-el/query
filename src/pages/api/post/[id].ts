// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { PostProps } from '@api/common/types';
import { getPostServer } from '@api/server';

interface ErrorResponse {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<PostProps | ErrorResponse>) {
    const query = req.query;

    const postID = query.id as string;

    getPostServer(postID)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ error: err.message }));
}
