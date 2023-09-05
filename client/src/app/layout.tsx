import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ReactQueryProvider } from './providers';
import './styles/globals.scss';

const inter = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Teameights',
  description: 'Welcome to Teameights!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <body className={inter.variable}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
