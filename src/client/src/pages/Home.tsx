import React, { useEffect } from 'react';
import Videos from '@/components/video/Videos';

// API and Model
import { Video } from '@/api/generated';
import { videoApi } from '@/api';

// Hooks
import useFetch from '@/hooks/useFetch';

// CSS
import '../css/home.css';

const Home: React.FC = () => {
  const { data: videos = [], isLoading, error } = useFetch<Video[]>(() => videoApi.getVideos());

  return (
    <main className="home-container">
      <h1>BTS live view count</h1>
      <Videos videos={videos} />
    </main>
  );
}

export default Home;