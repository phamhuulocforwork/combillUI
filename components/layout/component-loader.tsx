import type { ComponentType } from "react";

import type { RegistryItem } from "@/lib/components";

type ComponentLoaderProps = {
  component: RegistryItem;
  category: string;
};

const ComponentLoader = async <TProps extends object>({
  component,
  category,
  ...props
}: ComponentLoaderProps & TProps) => {
  if (!component?.name) {
    return null;
  }

  try {
    const Component = (
      await import(`@/registry/default/snippets/${category}/${component.name}`)
    ).default as ComponentType<TProps>;

    return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error);

    return null;
  }
};

export default ComponentLoader;
