import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
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
    <ReactQueryProvider>
      <html lang='en'>
        <body className={inter.variable}>
          <Toaster
            gutter={8}
            toastOptions={{
              style: { ...inter.style, background: '#2F3239', color: 'white' },
              duration: 2000,
            }}
          />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
