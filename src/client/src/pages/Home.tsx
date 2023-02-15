import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <h1>Home</h1>
      <a href="/api/auth/google">Login here</a>
    </div>
  );
}

export default Home;