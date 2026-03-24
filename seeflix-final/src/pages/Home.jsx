

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <MediaList title="Trending Movies" items={trending_movies} />
        <MediaList title="Top TV Shows" items={top_shows} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
