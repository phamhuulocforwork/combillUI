import * as React from "react";

import { HomeIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { defineStepper } from "@/registry/default/ui/stepper";

const {
  StepperProvider,
  StepperControls,
  StepperNavigation,
  StepperPanel,
  StepperStep,
  StepperTitle,
} = defineStepper(
  {
    id: "step-1",
    title: "Step 1",
    icon: <HomeIcon />,
  },
  {
    id: "step-2",
    title: "Step 2",
    icon: <SettingsIcon />,
  },
  {
    id: "step-3",
    title: "Step 3",
    icon: <UserIcon />,
  },
);

export default function StepperDemo() {
  return (
    <StepperProvider className='space-y-4' variant='horizontal'>
      {({ methods }) => (
        <React.Fragment>
          <StepperNavigation>
            {methods.all.map((step) => (
              <StepperStep
                key={step.id}
                of={step.id}
                onClick={() => methods.goTo(step.id)}
                icon={step.icon}
              >
                <StepperTitle>{step.title}</StepperTitle>
              </StepperStep>
            ))}
          </StepperNavigation>
          {methods.switch({
            "step-1": (step) => <Content id={step.id} />,
            "step-2": (step) => <Content id={step.id} />,
            "step-3": (step) => <Content id={step.id} />,
          })}
          <StepperControls>
            {!methods.isLast && (
              <Button
                variant='secondary'
                onClick={methods.prev}
                disabled={methods.isFirst}
              >
                Previous
              </Button>
            )}
            <Button onClick={methods.isLast ? methods.reset : methods.next}>
              {methods.isLast ? "Reset" : "Next"}
            </Button>
          </StepperControls>
        </React.Fragment>
      )}
    </StepperProvider>
  );
}

const Content = ({ id }: { id: string }) => {
  return (
    <StepperPanel className='h-[200px] content-center rounded border p-8'>
      <p className='text-xl font-normal'>Content for {id}</p>
    </StepperPanel>
  );
};
