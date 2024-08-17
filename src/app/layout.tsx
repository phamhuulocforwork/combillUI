import type { Metadata } from 'next';
import './globals.css';

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
    <html lang='en' className='dark'>
      <body className='dark:bg-dark dark:text-text-dark'>
        <img
          src='/vtuberlogo.svg'
          alt=''
          className='absolute left-1/2 top-1/2 -z-50 w-[20vw] -translate-x-1/2 -translate-y-1/2 transform opacity-20'
        />
        {children}
      </body>
    </html>
  );
}
