import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import spotifyIcon from "./src-assets/spotify-icon.png";
import instagramIcon from "./src-assets/instagram-icon.png";
import pinterestIcon from "./src-assets/pinterest-icon.png";
import tiktokIcon from "./src-assets/tiktok-icon.png";

const ICON_SIZE = 26;

const Footer = (backgroundColor = "#030303") => {
  const { pathname } = useLocation();
  const bg = backgroundColor;
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    window.open(
      `https://docs.google.com/forms/d/e/1FAIpQLSfmkJhfxa21u6Ra73YU7w1e-ue28Lu_aCw-9ra_geHn6Ibn3g/viewform`,
      "_blank",
    );
    setEmail("");
  };

  return (
    <div className="footer" style={{ backgroundColor: bg }}>
      <div className="footer-subscribe">
        <div className="footer-subscribe-text">
          <p>
            <span className="text-italic">solucky</span> magazine
          </p>
          <p>straight to your inbox</p>
        </div>
        <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            className="footer-subscribe-input"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="footer-subscribe-btn">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-card">
          <p className="footer-card-title">explore</p>
          <div className="footer-column">
            <div className="footer-separator" />
            <div className="footer-grid">
              <div className="footer-nav">
                <Link className="footer-link" to="/">
                  home
                </Link>
                <Link className="footer-link" to="/shop">
                  shop
                </Link>
                <Link className="footer-link" to="/magazine">
                  magazine
                </Link>
                <Link className="footer-link" to="/media">
                  media
                </Link>
              </div>
              <div className="footer-nav">
                <Link className="footer-link" to="/collabs">
                  collabs
                </Link>
                <Link className="footer-link" to="/events">
                  events
                </Link>
                <Link className="footer-link" to="/team">
                  team
                </Link>
                <Link className="footer-link" to="/about">
                  about
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-card">
          <p className="footer-card-title">join our team</p>
          <div className="footer-column">
            <div className="footer-separator" />
            <div className="footer-grid">
              <div className="footer-nav">
                <a
                  className="footer-link"
                  href="https://forms.gle/Gbc2KMMVCzecwB699"
                >
                  become a solucky contributor
                </a>
                <a
                  className="footer-link"
                  href="https://forms.gle/AdGu8PdoKstWsGnGA"
                >
                  become a solucky model
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-card">
          <p className="footer-card-title">get in touch</p>
          <div className="footer-column">
            <div className="footer-separator" />
            <div className="footer-grid">
              <div className="footer-nav">
                <div className="footer-social">
                  <a
                    href="https://www.instagram.com/solucky.life?igsh=MzRlODBiNWFlZA=="
                    aria-label="Instagram"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </a>
                  <a
                    href="https://www.pinterest.com/soluckylife/?invite_code=a92fd65467c947d396f0670335f9ae6f&sender=725361221141826477"
                    aria-label="Pinterest"
                  >
                    <img
                      src={pinterestIcon}
                      alt="Pinterest"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@solucky.life?_t=8o1sAdoenj0&_r=1"
                    aria-label="TikTok"
                  >
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </a>
                  <a
                    href="https://open.spotify.com/user/31zbsn67nxwfcxajfkbojydl2cpm?si=kcVeQRGcTnqTc7rcrqEIUw"
                    aria-label="Spotify"
                  >
                    <img
                      src={spotifyIcon}
                      alt="Spotify"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </a>
                </div>
                <a
                  className="footer-link"
                  href="mailto:solucky.contact@gmail.com"
                >
                  solucky.contact@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-card">
          <p className="footer-card-title">acknowledgements</p>
          <div className="footer-column">
            <div className="footer-separator" />
            <div className="footer-grid">
              <div className="footer-nav">
                <p className="footer-link">
                  UI/UX Designer: Shayna Trivedi
                </p>
                <p className="footer-link">
                  Fullstack Web Developer: Taj Sharma
                </p>
                <p className="footer-link">
                  Creative Director: Sanjana Solanki
                </p>
                <p className="footer-link">
                  Brand Advisors: Shayari Saha & Amani Chowdhury
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
