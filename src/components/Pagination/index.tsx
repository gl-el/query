import { useRouter } from 'next/router';

export default function Pagination({ onChange, page }: { page: number, onChange: (value: number) => void }) {

    return (
        <div css={{ padding: 20, display: 'flex', justifyContent: 'center', gap: 50 }}>
            <button disabled={Number(page) === 1} onClick={() => onChange(page - 1)}>
                Prev
            </button>
            <span>{page}</span>
            <button onClick={() => onChange(page + 1)}>Next</button>
        </div>
    );
}
