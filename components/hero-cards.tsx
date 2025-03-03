import Link from "next/link";

import { Check, Facebook, Github, Mail } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export const HeroCards = () => {
  return (
    <div className='flex-row flex-wrap gap-8 relative w-[700px] h-[500px]'>
      {/* Testimonial */}
      <Card className='absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader className='flex flex-row items-center gap-4 pb-2'>
          <Avatar>
            <AvatarImage alt='' src='https://github.com/shadcn.png' />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className='flex flex-col'>
            <span className='font-semibold tracking-tight'>John Doe</span>
            <span className='leading-none text-sm text-muted-foreground'>
              @john_doe
            </span>
          </div>
        </CardHeader>

        <CardContent>Awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className='absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader className='mt-8 flex justify-center items-center pb-2'>
          <img
            src='https://github.com/phamhuulocforwork.png'
            alt='@phamhuulocforwork'
            className='absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover'
          />
          <CardTitle className='text-center'>Pham Huu Loc</CardTitle>
          <CardDescription className='font-normal text-primary'>
            Web Developer
          </CardDescription>
        </CardHeader>

        <CardContent className='text-center pb-2'>
          <p>
            Hey! I'm a web developer studying at University with a focus on web
            development and design.
          </p>
        </CardContent>

        <CardFooter>
          <div className='mt-6 flex gap-2 items-center'>
            <Link href='mailto:phamhuulocforwork@gmail.com' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Mail className='!w-5 !h-5' />
              </Button>
            </Link>
            <Link
              href='https://www.facebook.com/phamhuuloc2003'
              target='_blank'
            >
              <Button variant='ghost' size='icon'>
                <Facebook className='!w-5 !h-5' />
              </Button>
            </Link>
            <Link href='https://github.com/phamhuulocforwork' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Github className='!w-5 !h-5' />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className='absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader>
          <CardTitle className='flex item-center justify-between'>
            Free
            <Badge variant='secondary' className='text-sm text-primary'>
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className='text-3xl font-bold'>$0</span>
            <span className='text-muted-foreground'> /month</span>
          </div>

          <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className='w-full'>Start Free Trial</Button>
        </CardContent>

        <hr className='w-4/5 m-auto mb-4' />

        <CardFooter className='flex'>
          <div className='space-y-4'>
            {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
              (benefit: string) => (
                <span key={benefit} className='flex'>
                  <Check className='text-green-500' />{" "}
                  <h3 className='ml-2'>{benefit}</h3>
                </span>
              ),
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className='absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
        <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className='text-md mt-2'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
