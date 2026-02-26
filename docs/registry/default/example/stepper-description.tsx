import * as React from 'react';

import { Button } from '@/components/ui/button';

import { defineStepper } from '@/registry/default/ui/stepper';

const {
  StepperProvider,
  StepperControls,
  StepperNavigation,
  StepperPanel,
  StepperStep,
  StepperTitle,
  StepperDescription,
} = defineStepper(
  {
    id: 'step-1',
    title: 'Info',
    description: 'Your information',
  },
  {
    id: 'step-2',
    title: 'Docs',
    description: 'Your documents',
  },
  {
    id: 'step-3',
    title: 'Completed',
    description: 'Your information and documents are completed',
  },
);

export default function StepperDemo() {
  return (
    <StepperProvider className="space-y-4" variant="horizontal">
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
                <StepperDescription>{step.description}</StepperDescription>
              </StepperStep>
            ))}
          </StepperNavigation>
          {methods.switch({
            'step-1': (step) => <Content id={step.id} />,
            'step-2': (step) => <Content id={step.id} />,
            'step-3': (step) => <Content id={step.id} />,
          })}
          <StepperControls>
            {!methods.isLast && (
              <Button
                variant="secondary"
                onClick={methods.prev}
                disabled={methods.isFirst}
              >
                Previous
              </Button>
            )}
            <Button onClick={methods.isLast ? methods.reset : methods.next}>
              {methods.isLast ? 'Reset' : 'Next'}
            </Button>
          </StepperControls>
        </React.Fragment>
      )}
    </StepperProvider>
  );
}

const Content = ({ id }: { id: string }) => {
  return (
    <StepperPanel className="h-[200px] content-center rounded border p-8">
      <p className="font-normal text-xl">Content for {id}</p>
    </StepperPanel>
  );
};
