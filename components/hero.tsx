import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <div className='max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0'>
      <div className='max-w-xl'>
        <Badge
          className='rounded-full py-1 border-none animate-fade-up text-balance'
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          {siteConfig.version}
        </Badge>
        <h1
          className='mt-6 max-w-[20ch] text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight animate-fade-up text-balance'
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          {siteConfig.short_description}
        </h1>
        <p
          className='mt-6 max-w-[60ch] text-lg animate-fade-up text-balance'
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          {siteConfig.description}
        </p>
        <div
          className='mt-12 flex items-center gap-4 animate-fade-up'
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          <Button size='lg' className='rounded-full text-base' asChild>
            <Link href='/docs/introduction'>
              Documentation <ArrowUpRight className='!h-5 !w-5' />
            </Link>
          </Button>
          <Button size='lg' className='rounded-full text-base' asChild>
            <Link
              target='_blank'
              rel='noreferrer'
              href={siteConfig.links.github}
            >
              Github <Github className='!h-5 !w-5' />
            </Link>
          </Button>
        </div>
      </div>
      <div
        className='relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square animate-fade-up'
        style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
      >
        <Image
          src='/images/me.jpg'
          fill
          alt=''
          className='object-cover rounded-xl'
        />
      </div>
    </div>
  );
};

export default Hero;
