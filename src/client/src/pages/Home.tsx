import React, { useEffect, useState } from 'react';
import Videos from '@/components/video/Videos';

// API and Model
import { Video } from '@/api/generated';
import { videoApi } from '@/api';

// Hooks
import useFetch from '@/hooks/useFetch';

// CSS
import '../css/home.css';
import Header from '@/components/header/Header';

const Home: React.FC = () => {
  const { data: videos = [], isLoading, error } = useFetch<Video[]>(() => videoApi.getVideos());

  const [sortBy, setSortBy] = useState<string>('view')

  return (
    <main className="home-container">
      <Header sortBy={sortBy} setSortBy={setSortBy}></Header>
      <Videos videos={videos} />
    </main>
  );
}

export default Home;