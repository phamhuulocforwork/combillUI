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

import { useToast } from "@/hooks/use-toast";

import { LabeledSwitch } from "@/registry/default/ui/labeled-switch";

const formSchema = z.object({
  consent: z.boolean({
    required_error: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LabeledSwitchWithForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false,
    },
  });

  function onSubmit(data: FormValues) {
    toast({
      title: "Form submitted!",
      description: `Consent: ${data.consent ? "Accepted" : "Not accepted"}`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-xs space-y-4'
      >
        <FormField
          control={form.control}
          name='consent'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terms and Conditions</FormLabel>
              <FormControl>
                <LabeledSwitch
                  firstLabel='Decline'
                  secondLabel='Accept'
                  selected={field.value}
                  onToggle={field.onChange}
                />
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
