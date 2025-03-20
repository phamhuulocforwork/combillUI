import * as React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { defineStepper } from "@/registry/default/ui/stepper";

type Variant = "horizontal" | "vertical" | "circle";

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
  const [variant, setVariant] = React.useState<Variant>("horizontal");
  return (
    <div className='flex w-full flex-col gap-8'>
      <RadioGroup
        value={variant}
        onValueChange={(value) => setVariant(value as Variant)}
      >
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='horizontal' id='horizontal-variant' />
          <Label htmlFor='horizontal-variant'>Horizontal</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='vertical' id='vertical-variant' />
          <Label htmlFor='vertical-variant'>Vertical</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='circle' id='circle-variant' />
          <Label htmlFor='circle-variant'>Circle</Label>
        </div>
      </RadioGroup>
      {variant === "horizontal" && <HorizontalStepper />}
      {variant === "vertical" && <VerticalStepper />}
      {variant === "circle" && <CircleStepper />}
    </div>
  );
}

const HorizontalStepper = () => {
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
};

const Content = ({ id }: { id: string }) => {
  return (
    <StepperPanel className='h-[200px] content-center rounded border  p-8'>
      <p className='text-xl font-normal'>Content for {id}</p>
    </StepperPanel>
  );
};

const VerticalStepper = () => {
  return (
    <StepperProvider className='space-y-4' variant='vertical'>
      {({ methods }) => (
        <>
          <StepperNavigation>
            {methods.all.map((step) => (
              <StepperStep
                key={step.id}
                of={step.id}
                onClick={() => methods.goTo(step.id)}
              >
                <StepperTitle>{step.title}</StepperTitle>
                {methods.when(step.id, () => (
                  <StepperPanel className='h-[200px] content-center rounded border  p-8'>
                    <p className='text-xl font-normal'>Content for {step.id}</p>
                  </StepperPanel>
                ))}
              </StepperStep>
            ))}
          </StepperNavigation>
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
        </>
      )}
    </StepperProvider>
  );
};

const CircleStepper = () => {
  return (
    <StepperProvider className='space-y-4' variant='circle'>
      {({ methods }) => (
        <React.Fragment>
          <StepperNavigation>
            <StepperStep of={methods.current.id}>
              <StepperTitle>{methods.current.title}</StepperTitle>
            </StepperStep>
          </StepperNavigation>
          {methods.when(methods.current.id, () => (
            <StepperPanel className='h-[200px] content-center rounded border  p-8'>
              <p className='text-xl font-normal'>
                Content for {methods.current.id}
              </p>
            </StepperPanel>
          ))}
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
};
