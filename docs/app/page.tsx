import Hero from '@/components/hero';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PagesContent from '@/components/layout/pages-content';

export default function IndexPage() {
  return (
    <div className="flex h-full min-h-screen w-full min-w-0 flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="container mx-auto flex w-full border-dashed min-[1400px]:border-x">
          <PagesContent>
            <Hero />
          </PagesContent>
        </div>
      </div>
      <Footer />
    </div>
  );
}
