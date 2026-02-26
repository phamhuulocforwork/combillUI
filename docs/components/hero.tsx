import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-auto md:grid-cols-2">
      <div>
        <Badge
          className="animate-fade-up text-balance rounded-full border-none py-1"
          style={{ animationDelay: '0.30s', animationFillMode: 'forwards' }}
        >
          Just released {siteConfig.version}
        </Badge>
        <h1
          className="!leading-[1.2] mt-6 max-w-[20ch] animate-fade-up text-balance font-bold text-4xl tracking-tight xl:text-5xl"
          style={{ animationDelay: '0.30s', animationFillMode: 'forwards' }}
        >
          {siteConfig.short_description}
        </h1>
        <p
          className="mt-6 max-w-[60ch] animate-fade-up text-balance text-lg"
          style={{ animationDelay: '0.40s', animationFillMode: 'forwards' }}
        >
          {siteConfig.description}
        </p>
        <div
          className="mt-12 flex animate-fade-up items-center gap-4"
          style={{ animationDelay: '0.40s', animationFillMode: 'forwards' }}
        >
          <Button size="lg" asChild>
            <Link href="/docs/introduction">
              Documentation <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              Github <Github className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div
        className="relative hidden w-full animate-fade-up overflow-hidden rounded-xl bg-accent lg:block"
        style={{ animationDelay: '0.30s', animationFillMode: 'forwards' }}
      >
        <Image
          src="/svgs/placeholder.svg"
          fill
          alt=""
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
