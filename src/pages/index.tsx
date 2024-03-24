import { getPostsServer } from '@api/server';

export { default } from '@views/IndexPage';

interface ServerSideContextProps {
    query: {
        page?: string;
    };
}

export async function getServerSideProps(context: ServerSideContextProps) {
    let page = 1;

    if (context.query.page) {
        page = Number(context.query.page);
    }

    const data = await getPostsServer(page);

    return {
        props: { initial: data },
    };
}
