import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductLogo } from '../icons';
import GetStartedLogo from '../../assets/getstarted.svg';
type Props = {};

function AuthLayout({}: Props) {
  return (
    <section className="flex min-h-screen text-white">
      <section className="bg-[#5331B4] w-full max-w-[809px] flex justify-center flex-[2]">
        <div className="pt-[56px] pb-[43px] flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-16">
              <ProductLogo />
              <h1 className="text-[46px] leading-[54px] font-bold font-roboto">
                PIDKYC
              </h1>
            </div>

            <p className="font-semibold text-[32px] leading-[48px] text-center max-w-[293px] mb-4">
              Few click away on KYC.
            </p>
            <p className=" font-medium text-lg text-center max-w-[239px]">
              Start your KYC in minutes. save time and money
            </p>
          </div>

          <div>
            <img src={GetStartedLogo} alt="get started" />
          </div>
        </div>
      </section>
      <section className=" flex-auto bg-[#F5F6F8]">
        <Outlet />
      </section>
    </section>
  );
}

export default AuthLayout;
{
  /* <nav className="flex items-center justify-between p-4">
<span>Header</span>
</nav>
<Outlet /> */
}
