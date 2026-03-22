import React, { useEffect, useState } from "react";
import styles from "./SongsSection.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/songs").then(res => setSongs(res.data));
    axios.get("https://qtify-backend.labs.crio.do/genres").then(res => setGenres(res.data.data));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === "all"
    ? songs
    : songs.filter(song => song.genre.key === selectedGenre);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Songs</h2>
        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          className={styles.tabs}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" value="all" className={styles.tab} />
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} className={styles.tab} />
          ))}
        </Tabs>
      </div>
      <Carousel
        items={filteredSongs}
        renderItem={(song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            follows={song.likes}
            isSong
          />
        )}
      />
    </section>
  );
}

export default SongsSection;
