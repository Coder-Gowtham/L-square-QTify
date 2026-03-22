import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";
import axios from "axios";
import Carousel from "../Carousel/Carousel";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Top Albums</h2>
        <Button onClick={() => setCollapsed((c) => !c)}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {collapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;
