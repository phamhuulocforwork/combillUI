import type { Metadata } from "next";

//TODO: Add metadata
export const metadata: Metadata = {
  title: "Shadcn Blocks",
  description: "",
  openGraph: {
    title: "Shadcn Blocks",
    description: "",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`,
    images: [
      {
        url: "",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Blocks",
    description: "",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`,
  },
};

const Page = async (_props: {
  searchParams: Promise<{ columns: string; q: string }>;
}) => {
  return (
    <div className='flex flex-col items-start justify-center space-y-4 p-4 sm:space-y-8 sm:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Shadcn Blocks</h1>
        <p className='text-muted-foreground'>
          An open-source collection of copy-and-paste Shadcn Blocks designed to
          accelerate your project development. Below is a summary of the
          available component categories:
        </p>
      </div>
    </div>
  );
};

export default Page;
