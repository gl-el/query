import Link from 'next/link';

import { PostProps } from '@api/common/types';

export default function PostPreview({ id, title, body }: PostProps) {
    return (
        <Link href={`/posts/${id}`}>
            <div css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                backgroundColor: '#ececec',
                borderRadius: 10,
                padding: 14,
                transition: 'background-color 0.2s',
                '&:hover': {
                    backgroundColor:'#d7d6d6'
                }
            }}>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>Read more..</p>
            </div>
        </Link>
    );
}
