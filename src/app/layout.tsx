import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context';
import { Header } from '@/components';

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
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative flex min-h-screen w-full flex-col items-center justify-center bg-light dark:bg-dark'>
            <div className='my-32 flex flex-col gap-16'>
              <Header />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
