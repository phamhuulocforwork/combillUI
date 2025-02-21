'use client';

import * as React from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useToast } from '@/hooks/use-toast';

import { ResponsiveTextarea } from '@/registry/default/ui/responsive-textarea';

const formSchema = z.object({
  message: z.string().min(1, 'Message is required'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ResponsiveTextareaWithForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  function onSubmit(data: FormValues) {
    toast({
      title: 'Message sent!',
      description: `Message: ${data.message}`,
    });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full max-w-2xl space-y-4'
        >
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <ResponsiveTextarea {...field} className='w-full' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' type='submit'>
            Send message
            <Send />
          </Button>
        </form>
      </Form>
    </div>
  );
}
