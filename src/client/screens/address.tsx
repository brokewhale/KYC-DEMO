import React from 'react';
import { useAppState } from '../contexts/AppContext';

type Props = {};

function Address(props: Props) {
  const state = useAppState();
  return (
    <section className="pt-[50px] px-[118px] w-full">
      <div className="flex flex-col justify-start w-full">
        <h1 className=" font-semibold text-[28px] leading-[42px] text-[#0D1D54]">
          Address details
        </h1>
      </div>
    </section>
  );
}

export default Address;
