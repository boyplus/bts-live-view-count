import React from 'react';

// Api and model
import { authApi } from '@/api';
import { Admin } from '@/api/generated';

// Hooks
import useFetch from '@/hooks/useFetch';

// Components
import Loader from '../loader/SquareLoader';

// CSS
import './layout.css';

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

    if (isLoading) {
      return <div className='loader-container'><Loader isLoading={isLoading} /></div>
    }
    if (error) {
      if (status) {
        switch (status) {
          case 401: return <div>You are not authorized</div>
          default: return <div>Something went wrong...</div>
        }
      }
      else {

      }
      return <div>Error</div>
    }
    return children;
  }

  return (
    <>
      {renderContent()}
    </>
  );
}

export default Layout;