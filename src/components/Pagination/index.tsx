import { useRouter } from 'next/router';

export default function Pagination() {
    const router = useRouter();
    const { pathname, query } = router;
    const page = Number(typeof query.page === 'string' ? query.page : 1);

    const changePage = (page: number) => {
        if (page - 1 < 0) {
            return;
        }
        router.push(
            {
                pathname,
                query: { page: page },
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <div css={{ padding: 20, display: 'flex', justifyContent: 'center', gap: 50 }}>
            <button disabled={Number(page) === 1} onClick={() => changePage(page - 1)}>
                Prev
            </button>
            <span>{page}</span>
            <button onClick={() => changePage(page + 1)}>Next</button>
        </div>
    );
}
