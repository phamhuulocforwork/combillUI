'use client';

import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/ScrollArea';

interface CollapsibleCodeProps {
  children: React.ReactNode;
  maxHeight?: number;
}

export function CollapsibleCode({ children, maxHeight = 300 }: CollapsibleCodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='relative'>
      <ScrollArea
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? '' : `max-h-[${maxHeight}px]`}`}
      >
        {children}
      </ScrollArea>
      {!isExpanded && (
        <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent' />
      )}
      <button
        className='text-muted-foreground mt-2 text-sm hover:text-foreground'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}
