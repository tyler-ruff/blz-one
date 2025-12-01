'use client'

import { AuthContextProvider } from '@/src/context/AuthContext';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
