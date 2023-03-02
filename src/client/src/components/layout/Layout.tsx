import React from 'react';

// Api and model
import { authApi } from '@/api';
import { Admin } from '@/api/generated';

// Hooks
import useFetch from '@/hooks/useFetch';

type LayoutProps = {
  isProtected: boolean;
  children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ isProtected, children }) => {
  // Check whether admin is logged in
  const { data: profile, isLoading, error } = useFetch<Admin>(() => authApi.profile(), { isDelay: true });

  if (isProtected) {
    console.log(profile)
  }

  return (
    <>
      {isLoading && isProtected ? <div>Loading...</div> : children}
    </>
  );
}

export default Layout;