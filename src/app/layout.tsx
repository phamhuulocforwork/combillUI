import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/_app/Footer';
import { Header } from '@/components/_app/Header';
import { Inter } from 'next/font/google';
import { Providers } from '@/provider/proveder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'billUI',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Header />
          <main className='flex w-full flex-col items-center justify-center gap-4'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
