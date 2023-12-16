import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Toaster } from 'sonner';
import { ReactQueryProvider } from './providers';
import './styles/globals.scss';
import { ReactNode } from 'react';

const inter = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Teameights',
  description: 'Welcome to Teameights!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <ReactQueryProvider>
          {/* <CookieBanner /> */}
          <Toaster
            theme='dark'
            toastOptions={{
              style: {
                ...inter.style,
                background: 'var(--grey-dark-color)',
                color: 'var(--white-color)',
                border: 'none',
              },
            }}
          />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
