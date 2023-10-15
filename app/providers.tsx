'use client'

import { AuthContextProvider } from '@/context/AuthContext';

export function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
    );
}