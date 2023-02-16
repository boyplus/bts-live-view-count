import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { adminApi, authApi } from '@/api';
import { Admin } from '@/api/generated';

const Profile: React.FC = () => {
  const [admin, setAdmin] = useState<Admin>();
  const [unverifiedAdmins, setUnverifiedAdmins] = useState<Admin[]>([]);

  const fetchProfile = async () => {
    const res = await authApi.profile();
    setAdmin(res.data)

    const x = await adminApi.getWaitingVerification();
    setUnverifiedAdmins(x.data);
  }

  useEffect(() => {
    fetchProfile();
  }, [])
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <h1>Profile Page</h1>
      <p>Hello, {admin?.email}</p>

    </div>
  );
}

export default Profile;