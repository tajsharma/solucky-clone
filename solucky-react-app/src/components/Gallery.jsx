// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery({
  title,
  date,
  description,
  credits,   // <-- NEW
  images,
  onClose,
}) {
  const [index, setIndex] = useState(0);

  const media = images.map((item) => {
    if (typeof item === "string") {
      const ext = item.split("?")[0].split(".").pop().toLowerCase();
      if (["mp4", "webm", "ogg"].includes(ext)) {
        return { type: "video", src: item };
      } else {
        return { type: "image", src: item };
      }
    }
    return item;
  });

  const total = media.length;
  const prevSlide = () => setIndex((i) => (i - 1 + total) % total);
  const nextSlide = () => setIndex((i) => (i + 1) % total);
  const thumbs = [1, 2, 3].map((off) => (index + off) % total);

  // helper to render credits consistently
  const hasCredits =
    (Array.isArray(credits) && credits.length > 0) ||
    (typeof credits === "string" && credits.trim().length > 0);

  return (
    <div className="gallery-overlay">
      <div className="gallery-container">
        {/* Sidebar thumbnails/nav */}
        <div className="gallery-sidebar">
          <button className="thumb-nav gallery-buttons" onClick={prevSlide}>
            <img
              src="../Assets/Galleries/arrow-up.svg"
              alt="prev"
              className="back-button-gallery back-next"
            />
          </button>

          {thumbs.map((ti) => {
            const item = media[ti];
            return item.type === "video" ? (
              <video
                key={ti}
                className="gallery-thumb"
                muted
                poster={item.poster}
                onClick={() => setIndex(ti)}
              >
                <source src={item.src} />
              </video>
            ) : (
              <img
                key={ti}
                className="gallery-thumb"
                src={item.src}
                alt={`thumb ${ti + 1}`}
                onClick={() => setIndex(ti)}
              />
            );
          })}

          <button className="thumb-nav gallery-buttons" onClick={nextSlide}>
            <img
              src="../Assets/Galleries/arrow-down.svg"
              alt="next"
              className="back-button-gallery back-previous"
            />
          </button>
        </div>

        {/* Main panel */}
        <div className="gallery-main">
          <div className="gallery-header">
            <div className="gallery-wrapper-top">
              <div className="button-and-title-gallery">
                <button className="gallery-close gallery-buttons" onClick={onClose}>
                  <img
                    src="../Assets/Galleries/arrow-back.svg"
                    alt="close"
                    className="back-button-gallery"
                  />
                </button>
                <div className="gallery-title">
                  {title}
                  <img
                    className="gallery-icon-svg"
                    src="../Assets/Galleries/gallery-seperator.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="gallery-date">{date}</div>
            </div>

            {/* NEW: Credits section (above description) */}
            {hasCredits && (
              <div className="gallery-credits">
                <span className="gallery-credits-label">Credits:  </span>
                <span className="gallery-credits-list">{credits}</span>
              </div>
            )}

            {description && (
              <div className="gallery-wrapper-bottom">
                <p className="gallery-description">{description}</p>
              </div>
            )}
          </div>

          <div className="gallery-content">
            {media[index].type === "video" ? (
              <video
                className="gallery-image"
                controls
                autoPlay
                src={media[index].src}
                poster={media[index].poster}
              />
            ) : (
              <img
                className="gallery-image"
                src={media[index].src}
                alt={`slide ${index + 1}`}
              />
            )}
          </div>

          <div className="gallery-counter">
            {index + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
