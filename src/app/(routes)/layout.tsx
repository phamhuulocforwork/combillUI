import { Footer } from '@/components/_app/Footer';
import { Header } from '@/components/_app/Header';

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex w-full flex-col'>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
