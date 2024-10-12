'use client';

import React, { useEffect, useState } from 'react';
import {
  useMotionValue,
  Reorder,
  useDragControls,
  motion,
  MotionValue,
  animate,
  DragControls,
} from 'framer-motion';
import { Grip } from 'lucide-react';

interface DragItemProps {
  items?: { id: number; title: string }[];
}

export function DragItem({ items }: DragItemProps) {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      title: 'Drag item 1',
    },
    {
      id: 2,
      title: 'Drag item 2',
    },
    {
      id: 3,
      title: 'Drag item 3',
    },
  ]);

  // const [itemList, setItemList] = useState(items);

  return (
    <Reorder.Group
      axis='y'
      values={itemList}
      onReorder={setItemList}
      className='mx-auto w-full max-w-md space-y-2'
    >
      {itemList.map((item) => (
        <Item key={item.id} item={item}>
          {item.title}
        </Item>
      ))}
    </Reorder.Group>
  );
}

const Item = ({ children, item }: { children: React.ReactNode; item: any }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
      className='flex w-full items-center justify-between rounded-md border bg-background p-3 text-foreground'
    >
      <div>{children}</div>
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
interface Props {
  dragControls: DragControls;
}
export function ReorderIcon({ dragControls }: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      onPointerDown={(e) => {
        e.preventDefault();
        dragControls.start(e);
      }}
    >
      <Grip className='cursor-grab' />
    </motion.div>
  );
}

const inactiveShadow = '0px 0px 0px rgba(0,0,0,0.8)';

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, '5px 5px 10px rgba(0,0,0,0.3)');
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}
