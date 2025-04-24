import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-auto'>
      <div>
        <Badge
          className='rounded-full py-1 border-none animate-fade-up text-balance'
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          Just released {siteConfig.version}
        </Badge>
        <h1
          className='mt-6 max-w-[20ch] text-4xl xl:text-5xl font-bold !leading-[1.2] tracking-tight animate-fade-up text-balance'
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
        className='relative w-full hidden lg:block rounded-xl bg-accent overflow-hidden animate-fade-up'
        style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
      >
        <Image
          src='/svgs/placeholder.svg'
          fill
          alt=''
          className='object-cover rounded-xl'
        />
      </div>
    </div>
  );
}
