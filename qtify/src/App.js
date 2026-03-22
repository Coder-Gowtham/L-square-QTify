


import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

import SongsSection from "./components/SongsSection/SongsSection";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/albums/top").then(res => setTopAlbums(res.data));
    axios.get("https://qtify-backend.labs.crio.do/albums/new").then(res => setNewAlbums(res.data));
    // For search, you may want to use all albums or a dedicated endpoint. Here, we combine both for demo.
    Promise.all([
      axios.get("https://qtify-backend.labs.crio.do/albums/top"),
      axios.get("https://qtify-backend.labs.crio.do/albums/new")
    ]).then(([top, newly]) => {
      setSearchData([...top.data, ...newly.data]);
    });
  }, []);

  return (
    <div className="App">
      <Navbar searchData={searchData} />
      <Hero />
      <Section title="Top Albums" albums={topAlbums} />
      <Section title="New Albums" albums={newAlbums} />
      <SongsSection />
    </div>
  );
}

export default App;
