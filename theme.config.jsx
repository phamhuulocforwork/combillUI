import { Logo } from '@/components';

export default {
  logo: (
    <>
      <Logo width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>billUI</span>
    </>
  ),
  project: {
    link: 'https://github.com/phamhuulocforwork/',
  },
  docsRepositoryBase: 'https://github.com/phamhuulocforwork/',
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='billUI' />
      <meta property='og:description' content='The next site builder' />
    </>
  ),
  footer: {
    content: (
      <div className='flex w-full flex-col items-center sm:items-start'>
        <p className='mt-6 text-xs'>© {new Date().getFullYear()} billUI.</p>
      </div>
    ),
  },
};
