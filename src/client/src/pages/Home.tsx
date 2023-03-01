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
import { SortVideoBy } from '@/api/non-generated/model';



const Home: React.FC = () => {
  const { data: videos = [], isLoading, error } = useFetch<Video[]>(() => videoApi.getVideos(sortBy), 300000);


  const [sortBy, setSortBy] = useState<SortVideoBy>(SortVideoBy.View)

  return (
    <main className="home-container">
      <Header sortBy={sortBy} setSortBy={setSortBy}></Header>
      <Videos videos={videos} isLoading={isLoading} />
    </main>
  );
}

export default Home;