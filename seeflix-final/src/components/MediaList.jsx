import React from "react";
import MediaCard from "./MediaCard";
import "../index.css";

const MediaList = ({ title, items }) => {
  return (
    <section className="media-list-section">
      <h2 className="media-list-title">{title}</h2>
      <div className="media-list">
        {items.map((item, idx) => (
          <MediaCard
            key={idx}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaList;
