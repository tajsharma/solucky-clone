import React from "react";
import "./EmbeddedContent.css";

// items: array of { id, title, issue, thumbnail, images }
// onSelect: function(id) => void
const EmbeddedContent = ({ items, onSelect }) => {
  return (
    <div className="embedded-container">
      <h1 className="embedded-title">Albums</h1>
      <h2 className="embedded-subtitle">Magazine Photoshoots</h2>

      <div className="grid-wrapper">
        {items.map(({ id, title, issue, thumbnail }) => (
          <div key={id} className="photo-card">
            <img
              src={thumbnail}
              alt={title}
              className="photo-thumb"
              onClick={() => onSelect(id)}
              style={{ cursor: 'pointer' }}
            />
            <div className="photo-title">{title}</div>
            <div className="photo-issue">issue {issue}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmbeddedContent;
