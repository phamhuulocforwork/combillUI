'use client';

import { Lever, LeverButton } from '@/components';
import { useState } from 'react';

export function LeverDemo() {
  const [selected, setSelected] = useState(true);

  const handleToggle = (value: boolean) => {
    setSelected(value);
  };
  return (
    <Lever onClick={() => handleToggle(!selected)}>
      <LeverButton selected={selected}>Danh sách phát</LeverButton>
      <LeverButton selected={!selected}>Nghe gần đây</LeverButton>
    </Lever>
  );
}
