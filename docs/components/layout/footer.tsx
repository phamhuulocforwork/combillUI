import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex w-full flex-col h-[var(--header-height)]'>
      <div className='flex w-full h-[var(--header-height)] border-t border-dashed'>
        <div className='text-muted-foreground mx-auto flex h-[var(--header-height)] items-center container justify-between gap-5 border-dashed text-center max-lg:flex-col min-[1400px]:border-x'>
          <p>
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
};

export default Footer;
