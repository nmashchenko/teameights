import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { ReactQueryProvider } from './providers';

import './styles/globals.scss';

const inter = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  description: 'Welcome to Teameights!',
  title: 'Teameights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <body className={inter.variable}>
          <Toaster
            gutter={8}
            toastOptions={{
              duration: 2000,
              style: { ...inter.style, background: '#2F3239', color: 'white' },
            }}
          />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
