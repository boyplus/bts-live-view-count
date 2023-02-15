import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '@/api'

interface User {
  email: string;
}

interface Admin {
  id: string;
  email: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [admins, setAdmins] = useState<Admin[]>();

  const fetchProfile = async () => {
    const res = await api.get('/auth/profile')
    setUser(res.data)

    const test = await api.get('/admin/waiting-verify')
    console.log(test.data)
  }

  useEffect(() => {
    fetchProfile();
  }, [])
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <h1>Profile Page</h1>
      <p>Hello, {user?.email}</p>
    </div>
  );
}

export default Profile;