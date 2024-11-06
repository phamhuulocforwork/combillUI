import { Logo } from '@/components/app/Logo';
import { SwitchModeButton } from '@/components/app/SwitchModeButton';

export default {
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='billUI' />
      <meta property='og:description' content='The next site builder' />
      <title>billUI</title>
    </>
  ),
  logo: (
    <>
      <Logo width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>billUI</span>
    </>
  ),
  project: {
    link: 'https://github.com/phamhuulocforwork',
  },
  chat: {
    link: 'https://www.facebook.com/phamhuuloc2003',
    icon: (
      <svg
        width='24'
        height='24'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
      >
        <path d='M12.001 2C17.6345 2 22.001 6.1265 22.001 11.7C22.001 17.2735 17.6345 21.4 12.001 21.4C11.0233 21.4023 10.0497 21.273 9.10648 21.0155C8.92907 20.9668 8.7403 20.9808 8.57198 21.055L6.58748 21.931C6.34398 22.0386 6.06291 22.018 5.83768 21.8761C5.61244 21.7342 5.47254 21.4896 5.46448 21.2235L5.40998 19.4445C5.40257 19.2257 5.30547 19.0196 5.14148 18.8745C3.19598 17.1345 2.00098 14.6155 2.00098 11.7C2.00098 6.1265 6.36748 2 12.001 2ZM5.99598 14.5365C5.71398 14.984 6.26398 15.488 6.68498 15.1685L9.84048 12.7735C10.0543 12.6122 10.3491 12.6122 10.563 12.7735L12.8995 14.5235C13.2346 14.7749 13.6596 14.8747 14.0716 14.7987C14.4836 14.7227 14.8451 14.4779 15.0685 14.1235L18.006 9.4635C18.288 9.016 17.738 8.512 17.317 8.8315L14.1615 11.2265C13.9476 11.3878 13.6528 11.3878 13.439 11.2265L11.1025 9.4765C10.7673 9.22511 10.3423 9.12532 9.93034 9.2013C9.51834 9.27728 9.15689 9.5221 8.93348 9.8765L5.99598 14.5365Z'></path>
      </svg>
    ),
  },
  themeSwitch: {
    component() {
      return <SwitchModeButton />;
    },
  },
  docsRepositoryBase: 'https://github.com/phamhuulocforwork/',
  footer: {
    content: (
      <div className='flex w-full flex-col items-center sm:items-start'>
        <p className='mt-6 text-xs'>© {new Date().getFullYear()} billUI.</p>
      </div>
    ),
  },
};
