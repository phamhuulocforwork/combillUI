import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context';
import { Header, LeftSideBar, RightSideBar } from '@/components';

export const metadata: Metadata = {
  title: 'TailwindCSS UI Kit',
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
          <main className='relative flex w-full flex-col bg-light dark:bg-dark'>
            <Header />
            <div className='relative mb-16 flex min-h-screen flex-row items-start justify-center gap-2'>
              <LeftSideBar />
              {children}
              <RightSideBar />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
