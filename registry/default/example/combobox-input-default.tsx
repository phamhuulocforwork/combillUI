import React from "react";

import { ComboboxInput } from "@/registry/default/ui/combobox-input";

export const mockData = [
  {
    id: crypto.randomUUID(),
    name: "Data 1",
  },
  {
    id: crypto.randomUUID(),
    name: "Data 2",
  },
  {
    id: crypto.randomUUID(),
    name: "Data 3",
  },
];

export default function ComboboxInputDefault() {
  return (
    <div>
      <ComboboxInput
        placeholder='Search...'
        options={mockData.map((data) => ({
          label: data.name,
          value: data.id,
        }))}
      />
    </div>
  );
}
