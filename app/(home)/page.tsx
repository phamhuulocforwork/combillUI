import Hero from "@/components/hero";

export default function IndexPage() {
  return (
    <section className='container flex flex-col items-center justify-center'>
      <Hero />
      <div className='bubble-shadow' />
    </section>
  );
}
