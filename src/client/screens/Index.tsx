import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/client/contexts/UserContext';
import { BsQrCodeScan } from 'react-icons/bs';
import { Head } from '~/client/components/shared/Head';
import { useForm } from 'react-hook-form';
import { FormInput } from '../components/shared/FormInput';
import {
  useAddFirstStepData,
  useAppState,
  UserDataStepOneType,
} from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
function Index() {
  const state = useAppState();
  const { addFirstStepData } = useAddFirstStepData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserDataStepOneType>();
  const onSubmit = handleSubmit((data) => {
    addFirstStepData(data);

    navigate('/onboarding');
  });

  const handleButtonClick = () => {
    setValue(
      'identifier',
      'did:polygonid:polygon:mumbsai:2rQ1URSt581bfRFNB76dey7foXGbnOwUkTK6URD1jA'
    );
    console.log('state', state);
  };
  return (
    <>
      <Head title="KYC" />
      <div className="min-h-screen text-black pt-[23px] pr-[25px] pl-[60px] flex flex-col">
        <div className="text-right font-normal text-[15px] leading-[22px] text-[#9A9A9A]">
          Having trouble? <span className="text-[#404B7C]">Get help</span>
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <h1 className="text-[#0D1D54] font-semibold text-[28px] leading-[42px] mb-3">
            Get Started
          </h1>
          <p className=" font-medium text-base text-[#404B7C] max-w-[539px]">
            Sign up with your polygonID wallet so that your information is not
            lost and safe with us.
          </p>
          <form onSubmit={onSubmit}>
            <div className="mt-[46px] w-full max-w-[556px]">
              <section className="flex gap-6">
                <FormInput
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  register={register}
                  rules={{ required: 'You must enter your first name.' }}
                  errors={errors}
                />

                <FormInput
                  id="nickname"
                  label="Nick Name"
                  name="nickname"
                  type="text"
                  placeholder="Enter nick name"
                  register={register}
                />
              </section>
              <section className="flex gap-6 mt-5">
                <FormInput
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  register={register}
                />
                <FormInput
                  id="country"
                  label="Country"
                  name="country"
                  type="text"
                  placeholder="Enter country"
                  register={register}
                />
              </section>
              <section className="flex gap-6 mt-5">
                <FormInput
                  id="identifier"
                  label="Identifier"
                  name="identifier"
                  type="text"
                  placeholder="Enter your PolygonID identifier"
                  register={register}
                  rules={{ required: 'Identifier not valid' }}
                  errors={errors}
                />
                <div className="flex items-end justify-center gap-3">
                  <p className="self-center pt-10 text-[#404B7C]">or</p>
                  <div
                    onClick={() => handleButtonClick()}
                    className=" cursor-pointer bg-[#5331B4]  w-16 h-[68px] flex items-center justify-center rounded-lg "
                  >
                    <BsQrCodeScan color="white" size={24} />
                  </div>
                </div>
              </section>
              <section className=" mt-11">
                <button
                  type="submit"
                  className=" h-[60px] bg-[#5331B4] w-[253px] rounded flex justify-center items-center"
                >
                  <span className="text-lg font-medium text-white">
                    {' '}
                    SAVE & COUNTINUE
                  </span>
                </button>
              </section>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Index;
