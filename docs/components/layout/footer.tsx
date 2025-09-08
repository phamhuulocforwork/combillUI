import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex w-full flex-col'>
      <div className='w-full border-t border-dashed'>
        <div className='text-muted-foreground mx-auto flex w-full container items-center justify-between gap-5 border-dashed px-8 py-6 text-center max-lg:flex-col min-[1400px]:border-x'>
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
