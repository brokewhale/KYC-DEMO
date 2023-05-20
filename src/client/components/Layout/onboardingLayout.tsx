import React from 'react';
import { CheckLogo } from '../icons';
import { Outlet } from 'react-router-dom';

type Props = {
  currentStep: number;
};

const OnboardingLayout = ({ currentStep }: Props) => {
  const steps = [
    { title: 'Personal Details', step: 1 },
    { title: 'Address Details', step: 2 },
    { title: 'Document Upload', step: 3 },
    { title: 'Done', step: 4 },
  ];

  return (
    <section className="pt-10 bg-[#F5F6F8] min-h-screen flex flex-col">
      <section className="bg-white w-full h-[157px] pt-[53px]">
        <div className="px-[10%] flex items-center justify-between">
          {steps.map((step, index) => {
            const isActiveStep = currentStep === step.step;
            const isCompletedStep = currentStep > step.step;
            const isLastStep = index < steps.length - 1;
            const stepClassName = `w-[98px] h-[30px] border border-solid border-[#D5D5D5] rounded-[50%] flex justify-center items-center stepLoader text-[#5331B4] ${
              isCompletedStep ? 'bg-[#25C448] border-none !text-[#CDCDCD]' : ''
            } ${isActiveStep ? 'border-[#5331B4]' : ''}`;
            const numberClassName = `text-[#858484] ${
              isActiveStep ? '!text-[#5331B4]' : ''
            }`;
            const lineClassName = `border border-solid border-[#D5D5D5] w-full ${
              isCompletedStep ? '!border-[#25C448]' : ''
            }`;

            return (
              <React.Fragment key={step.title}>
                <div className={stepClassName} data-description={step.title}>
                  {isCompletedStep ? (
                    <CheckLogo />
                  ) : (
                    <span className={numberClassName}>{step.step}</span>
                  )}
                </div>

                {isLastStep && <div className={lineClassName}></div>}
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section className="flex-1">
        <Outlet />
      </section>
    </section>
  );
};

export default OnboardingLayout;
