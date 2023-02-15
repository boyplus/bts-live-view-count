import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '@/axios'

interface User {
  email: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();

  const fetchProfile = async () => {
    const res = await axios.get('/auth/profile')
    setUser(res.data)
  }

  useEffect(() => {
    fetchProfile();
  }, [])
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <h1>Profile</h1>
      <p>Login as {user?.email}</p>
    </div>
  );
}

export default Profile;