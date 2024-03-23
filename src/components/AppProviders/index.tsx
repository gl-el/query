import { Global } from '@emotion/react';
import { type DehydratedState, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
                <Global
                    styles={{
                        a: {
                            textDecoration: 'none',
                            color: 'inherit',
                        },
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                            margin: 0,
                            padding: 0,
                        },
                        body: {
                            minHeight: '100vh',
                            fontFamily:
                                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                        },
                    }}
                />
                {children}
                <ReactQueryDevtools initialIsOpen={true} />
            </HydrationBoundary>
        </QueryClientProvider>
    );
}

export default AppProviders;
