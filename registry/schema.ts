import { z } from 'zod';

export const registryItemTypeSchema = z.enum([
  'registry:ui',
  'registry:example',
]);

export const componentFileSchema = z.object({
  path: z.string(),
  type: registryItemTypeSchema,
  content: z.string().optional(),
});

export const componentSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: z.union([z.literal('registry:ui'), z.literal('registry:example')]),
  registryDependencies: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  tailwind: z.record(z.any()).optional(),
  cssVars: z
    .object({
      light: z.record(z.string()).optional(),
      dark: z.record(z.string()).optional(),
    })
    .optional(),
  files: z.array(componentFileSchema),
});

export type ComponentFile = z.infer<typeof componentFileSchema>;
export type Component = z.infer<typeof componentSchema>;

export type Registry = Component[];
