"use client";

import * as React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/useToast";

import { TelInput } from "@/registry/default/ui/tel-input";

const formSchema = z.object({
  phone: z.string().min(1, "Phone number is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function TelInputWithForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: FormValues) {
    toast({
      title: "Phone number submitted!",
      description: `Phone: ${data.phone}`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <TelInput {...field} defaultCountry='VN' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          Submit
          <Send />
        </Button>
      </form>
    </Form>
  );
}
