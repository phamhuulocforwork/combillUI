'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useToast } from '@/hooks/use-toast';

import StarRating from '@/registry/default/ui/star-rating';

const FormSchema = z.object({
  rating: z.number().min(1, {
    message: 'Please provide a rating',
  }),
});

export default function StarRatingWithForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      rating: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Form submitted!',
      description: `Rating: ${data.rating}`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <StarRating value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormDescription>How would you rate our service?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Rating</Button>
      </form>
    </Form>
  );
}
