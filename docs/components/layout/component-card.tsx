import type { ReactNode } from 'react';

import type { RegistryItem } from '@/lib/components';
import { cn } from '@/lib/utils';

const ComponentCard = ({
  children,
  component,
  className,
}: {
  children: ReactNode;
  component: RegistryItem;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'group/item relative flex min-h-[185px] flex-col items-center justify-center group-first:border-t-0',
        className,
      )}
      data-slot={component.name}
    >
      {children}
    </div>
  );
};

export default ComponentCard;
