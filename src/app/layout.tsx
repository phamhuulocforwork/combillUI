import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/app/ThemeProvider';
import { Footer } from '@/components/app/Footer';
import { Header } from '@/components/app/Header';
import { Inter } from 'next/font/google';

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
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Header />
          <main className='flex w-full flex-col items-center justify-center gap-4'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
