import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context';
import { Footer, Header } from '@/components';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'billTail',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <main className='relative flex min-h-screen w-full flex-col items-center justify-start gap-12 bg-light dark:bg-dark'>
            <Image
              src='/vtuberlogo.svg'
              width={300}
              height={300}
              alt=''
              className='absolute left-1/2 top-1/2 -z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-20 md:w-1/3'
            />
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
