import * as React from 'react';

import { LabeledSwitch } from '@/registry/default/ui/labeled-switch';

export default function LabeledSwitchDefault() {
  const [selected, setSelected] = React.useState<boolean>(false);

  return (
    <LabeledSwitch
      firstLabel="False"
      secondLabel="True"
      selected={selected}
      onToggle={setSelected}
    />
  );
}
