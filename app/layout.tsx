import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { RootProvider } from 'fumadocs-ui/provider';

import { Toaster } from '@/components/ui/toaster';

import '@/styles/globals.css';

import { siteConfig } from '@/config/site';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'react',
    'ui',
    'ui-library',
    'shadcn-ui',
    'accessibility',
    'wai-aria',
  ],
  authors: [
    {
      name: 'huuloc',
      url: '',
    },
  ],
  creator: 'huuloc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
        <Toaster />
      </body>
    </html>
  );
}
