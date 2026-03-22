import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      <div className={styles.cardBottom}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </div>
  );
}

export default Card;
