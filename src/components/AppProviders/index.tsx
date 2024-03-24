import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

interface AppProvidersProps {
    children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
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
        </QueryClientProvider>
    );
}

export default AppProviders;
