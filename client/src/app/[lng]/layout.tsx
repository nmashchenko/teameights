import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ReactQueryProvider } from './providers';
import 'app/[lng]/styles/globals.scss';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import { languages } from 'shared/i18n/settings';
import { LanguageSwitcher } from 'features/language-switcher';

const inter = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Teameights',
  description: 'Welcome to Teameights!',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <ReactQueryProvider>
      <html lang={lng} dir={dir(lng)}>
        <body className={inter.variable}>
          {/* <CookieBanner /> */}
          <Toaster
            gutter={8}
            toastOptions={{
              style: { ...inter.style, background: '#2F3239', color: 'white' },
              duration: 2000,
            }}
          />
          <LanguageSwitcher lng={lng} />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
