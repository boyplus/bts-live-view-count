import React, { useState } from 'react';

// Components
import Videos from '@/components/video/Videos';
import Header from '@/components/header/Header';

// API and Model
import { Video } from '@/api/generated';
import { videoApi } from '@/api';
import { SortVideoBy } from '@/api/non-generated/model';

// Hooks
import useFetch from '@/hooks/useFetch';

// CSS
import '../css/home.css';

const Home: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortVideoBy>(SortVideoBy.View)
  const { data: videos = [], isLoading, isFirstTime, error } = useFetch<Video[]>
    (
      () => videoApi.getVideos(sortBy),
      { intervalNum: 300000, dependencies: [sortBy], isDelay: true }
    );

  return (
    <main className="home-container">
      <Header sortBy={sortBy} setSortBy={setSortBy}></Header>
      <Videos videos={videos} isLoading={isFirstTime && isLoading} />
    </main>
  );
}

export default Home;