import React from 'react';

// Api and model
import { authApi } from '@/api';
import { Admin } from '@/api/generated';

// Hooks
import useFetch from '@/hooks/useFetch';

// Components
import SquareLoader from '@/components/loader/SquareLoader';
import UnauthorizedFullScreen from '@/components/error/UnauthorizedFullScreen';
import SomethingWentWrongFullScreen from '@/components/error/SomethingWentWrongFullScreen';

type LayoutProps = {
  isProtected: boolean;
  children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ isProtected, children }) => {
  // Check whether admin is logged in
  const { data: profile, isLoading, error, status } = useFetch<Admin>
    (
      () => authApi.profile(), { isDelay: true, delayDuration: 2000 }
    );

  if (isProtected) {
    console.log(profile)
  }

  const renderContent = () => {
    if (!isProtected) return children;

    console.log('is loading is', isLoading)

    if (isLoading) {
      return <div className='center-full-screen-container'><SquareLoader isLoading={isLoading} /></div>
    }
    if (!error) return children;

    if (status) {
      switch (status) {
        case 401: return <UnauthorizedFullScreen />
        default: return <SomethingWentWrongFullScreen />
      }
    }
    return <SomethingWentWrongFullScreen />
  }

  return (
    <>
      {renderContent()}
    </>
  );
}

export default Layout;