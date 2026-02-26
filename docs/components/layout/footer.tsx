import Link from 'next/link';

interface FooterProps {
  fullWidth?: boolean;
}

export default function Footer({ fullWidth }: FooterProps) {
  return (
    <footer className="flex h-[var(--header-height)] w-full flex-col">
      <div className="flex h-[var(--header-height)] w-full border-t border-dashed">
        <div
          className={`mx-auto flex h-[var(--header-height)] items-center text-muted-foreground ${fullWidth ? 'min-w-screen max-w-[1400px]' : 'container min-[1400px]:border-x'} justify-between gap-5 border-dashed text-center max-lg:flex-col`}
        >
          <p className="px-4">
            {`©${new Date().getFullYear()}`}{' '}
            <Link
              href="https://github.com/phamhuulocforwork"
              className="font-medium text-foreground"
            >
              huuloc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
