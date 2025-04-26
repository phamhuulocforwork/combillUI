import { registry } from "@/registry";
import type { Component } from "@/registry/schema";

export type RegistryItem = Component & { name: string };

const components = registry as RegistryItem[];

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map((comp) => [comp.name, comp]));

  return names
    .map((name) => componentsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined);
};

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks");
};
