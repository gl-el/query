import {
    type DehydratedState,
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
    hydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

interface AppProvidersProps {
    children: ReactNode;
    dehydratedState: DehydratedState;
}

function AppProviders({ children, dehydratedState }: AppProvidersProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
                <ReactQueryDevtools initialIsOpen={true} />
            </HydrationBoundary>
        </QueryClientProvider>
    );
}

export default AppProviders;
