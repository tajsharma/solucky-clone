import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = ( backgroundColor = '#030303') =>{
    const { pathname } = useLocation();
    const bg = backgroundColor;
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfmkJhfxa21u6Ra73YU7w1e-ue28Lu_aCw-9ra_geHn6Ibn3g/viewform`, '_blank');
        setEmail('');
    };

    return(
        <div className="footer" style={{ backgroundColor: bg }}>
          <div className="footer-subscribe">
            <div className="footer-subscribe-text">
              <p><span className="text-italic">solucky</span> magazine</p>
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
              <button type="submit" className="footer-subscribe-btn">SUBSCRIBE</button>
            </form>
          </div>

          <div className="footer-columns">
            <div className="footer-card">
              <p className="footer-card-title">explore</p>
              <div className="footer-column">
                <div className="footer-separator" />
                <div className="footer-grid">
                  <div className="footer-nav">
                    <Link className="footer-link" to="/">home</Link>
                    <Link className="footer-link" to="/shop">shop</Link>
                    <Link className="footer-link" to="/magazine">magazine</Link>
                    <Link className="footer-link" to="/media">media</Link>
                  </div>
                  <div className="footer-nav">
                    <Link className="footer-link" to="/collabs">collabs</Link>
                    <Link className="footer-link" to="/events">events</Link>
                    <Link className="footer-link" to="/team">team</Link>
                    <Link className="footer-link" to="/about">about</Link>
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
                    <a className="footer-link" href="https://forms.gle/Gbc2KMMVCzecwB699">become a solucky contributor</a>
                    <a className="footer-link" href="https://forms.gle/AdGu8PdoKstWsGnGA">become a solucky model</a>
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
                      <a href="https://www.instagram.com/solucky.life?igsh=MzRlODBiNWFlZA==" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.958c.453.453.766.91.958 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.958 1.47 4.088 4.088 0 01-1.47.958c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.958 4.088 4.088 0 01-.958-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.958-1.47 4.088 4.088 0 011.47-.958c.46-.163 1.26-.349 2.43-.404C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.763.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.763.5-1.636.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.097.333 18.224.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#F5F5F5"/>
                        </svg>
                      </a>
                      <a href="https://x.com/soluckylife" aria-label="Twitter/X">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#F5F5F5"/>
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@solucky.life" aria-label="YouTube">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#F5F5F5"/>
                        </svg>
                      </a>
                      <a href="https://open.spotify.com/user/31zbsn67nxwfcxajfkbojydl2cpm?si=kcVeQRGcTnqTc7rcrqEIUw" aria-label="RSS/Spotify">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795 0 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" fill="#F5F5F5"/>
                        </svg>
                      </a>
                    </div>
                    <a className="footer-link" href="mailto:solucky.contact@gmail.com">
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
                    <p className="footer-link">Product & UX/UI Designer: Shayna Trivedi</p>
                    <p className="footer-link">Fullstack Web Developer: Taj Sharma</p>
                    <p className="footer-link">Brand & Creative Director: Sanjana Solanki</p>
                    <p className="footer-link">Brand Advisors: Shayari Saha & Amani Chowdhury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer;
