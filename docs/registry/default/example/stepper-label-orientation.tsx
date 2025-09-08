import * as React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { defineStepper } from "@/registry/default/ui/stepper";

type LabelOrientation = "horizontal" | "vertical";

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
  },
  {
    id: "step-2",
    title: "Step 2",
  },
  {
    id: "step-3",
    title: "Step 3",
  },
);

export default function StepperVariants() {
  const [labelOrientation, setLabelOrientation] =
    React.useState<LabelOrientation>("horizontal");
  return (
    <div className='flex w-full flex-col gap-8'>
      <RadioGroup
        value={labelOrientation}
        onValueChange={(value) =>
          setLabelOrientation(value as LabelOrientation)
        }
      >
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='horizontal' id='horizontal-label' />
          <Label htmlFor='horizontal-label'>Horizontal</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='vertical' id='vertical-label' />
          <Label htmlFor='vertical-label'>Vertical</Label>
        </div>
      </RadioGroup>
      <StepperProvider
        className='space-y-4'
        variant='horizontal'
        labelOrientation={labelOrientation}
      >
        {({ methods }) => (
          <React.Fragment>
            <StepperNavigation>
              {methods.all.map((step) => (
                <StepperStep
                  key={step.id}
                  of={step.id}
                  onClick={() => methods.goTo(step.id)}
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
    </div>
  );
}

const Content = ({ id }: { id: string }) => {
  return (
    <StepperPanel className='h-[200px] content-center rounded border  p-8'>
      <p className='text-xl font-normal'>Content for {id}</p>
    </StepperPanel>
  );
};
