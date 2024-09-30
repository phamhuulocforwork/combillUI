export function Header() {
  return (
    <>
      <img
        src='/vtuberlogo.svg'
        alt=''
        className='absolute left-1/2 top-1/2 z-10 w-[30vw] -translate-x-1/2 -translate-y-1/2 transform opacity-20'
      />
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-5xl font-bold'>
          Welcome to my{' '}
          <span className='font-black text-primary-400'>TailwindCSS</span> UI
          Kit!
        </h1>
        <h2 className='text-center text-xl'>
          This is a Next.js starter template with TailwindCSS and TypeScript.
        </h2>
      </div>
    </>
  );
}
