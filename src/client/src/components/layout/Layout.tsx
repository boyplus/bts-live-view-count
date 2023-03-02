import React from 'react';

// Api and model
import { authApi } from '@/api';
import { Admin } from '@/api/generated';

// Hooks
import useFetch from '@/hooks/useFetch';

// Components
import Loader from '../loader';

// CSS
import './layout.css';

type LayoutProps = {
  isProtected: boolean;
  children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ isProtected, children }) => {
  // Check whether admin is logged in
  const { data: profile, isLoading, error } = useFetch<Admin>(() => authApi.profile(), { isDelay: true, delayDuration: 2000 });

  if (isProtected) {
    console.log(profile)
  }

  const renderContent = () => {
    if (isProtected) {
      return (
        isLoading ? <div className='loader-container'><Loader isLoading={isLoading} /></div> : children
      )
    } else {
      return children;
    }
  }

  return (
    <>
      {renderContent()}
    </>
  );
}

export default Layout;