import { Check, FileText, UserCircle } from 'lucide-react';
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
} = defineStepper(
  {
    id: 'step-1',
    title: 'Info',
  },
  {
    id: 'step-2',
    title: 'Docs',
  },
  {
    id: 'step-3',
    title: 'Completed',
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
              </StepperStep>
            ))}
          </StepperNavigation>
          {methods.switch({
            'step-1': (step) => <Content id={step.id} />,
            'step-2': (step) => <Content id={step.id} />,
            'step-3': (step) => <Content id={step.id} />,
          })}
          <StepperControls>
            {!methods.isFirst && (
              <Button variant="secondary" onClick={methods.prev}>
                Back
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
  const contents = {
    'step-1': {
      icon: <UserCircle className="h-12 w-12 text-primary" />,
      title: 'Personal Information',
      description: 'Please fill in your basic information',
    },
    'step-2': {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: 'Required Documents',
      description: 'Please upload the required documents',
    },
    'step-3': {
      icon: <Check className="h-12 w-12 text-primary" />,
      title: 'Completed',
      description: 'You have completed all the steps!',
    },
  };

  const content = contents[id as keyof typeof contents];

  return (
    <StepperPanel className="rounded-md border p-4">
      <div className="flex flex-col items-center text-center">
        {content.icon}
        <h3 className="mt-4 font-medium text-xl">{content.title}</h3>
        <p className="mt-2 text-muted-foreground">{content.description}</p>
      </div>
    </StepperPanel>
  );
};
