import Link from "next/link";

interface FooterProps {
  fullWidth?: boolean;
}

export default function Footer({ fullWidth }: FooterProps) {
  return (
    <footer className='flex w-full flex-col h-[var(--header-height)]'>
      <div className='flex w-full h-[var(--header-height)] border-t border-dashed'>
        <div
          className={`text-muted-foreground mx-auto flex h-[var(--header-height)] items-center ${fullWidth ? "min-w-screen max-w-[1400px]" : "container min-[1400px]:border-x"} justify-between gap-5 border-dashed text-center max-lg:flex-col`}
        >
          <p className='px-4'>
            {`©${new Date().getFullYear()}`}{" "}
            <Link
              href='https://github.com/phamhuulocforwork'
              className='text-foreground font-medium'
            >
              huuloc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
