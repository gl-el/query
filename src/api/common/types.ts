export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type NewPostData = Omit<PostProps, 'id'>;
