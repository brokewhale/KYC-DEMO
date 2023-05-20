import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import {
  Outlet,
  RouteObject,
  useRoutes,
  BrowserRouter,
} from 'react-router-dom';
import AuthLayout from '../components/Layout/authLayout';
import CreateAccount from '../screens/create';
import OnboardingLayout from '../components/Layout/onboardingLayout';
import { useAppState } from '../contexts/AppContext';

const Loading = () => (
  <p className="w-full h-full p-4 text-center">Loading...</p>
);

const IndexScreen = lazy(() => import('~/client/screens/Index'));
const Page404Screen = lazy(() => import('~/client/screens/404'));
const AddressScreen = lazy(() => import('~/client/screens/address'));

function Layout() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <span>Header</span>
      </nav>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const state = useAppState();

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: 'create',
          element: <CreateAccount />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: '/onboarding',
      element: <OnboardingLayout currentStep={state.currentStep} />,
      children: [
        {
          index: true,
          element: <AddressScreen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
