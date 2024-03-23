// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_BASE } from '@utils/consts';
import type { NextApiRequest, NextApiResponse } from 'next';

import { PostProps } from '@api/common/types';

const getData = async (postID: string) => {
    return await fetch(`${API_BASE}/posts/${postID}`);
};

interface ErrorResponse {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<PostProps | ErrorResponse>) {
    const query = req.query;

    const postID = query.id as string;

    getData(postID)
        .then(data => data.json())
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ error: err.message }));
}
