import React, { useState, useEffect, useRef } from "react";
import './Home.css'
import sep from "./src-assets/four-leaf-clover.png";
import Footer from "./Footer";
import Flipbook from "./Flipbook";
import { Link } from "react-router-dom";


const labels = [
    "TIMELESS",
    "LUCKY",
    "WOC OWNED",
    "PASSIONATE",
    "BAY AREA",
    "AUTHENTIC",
    "CREATIVE",
  ];

const Home = () =>{
    const loop = [...labels, ...labels];
    const [loading, setLoading] = useState(true);
  
    const loadingVidRef = useRef(null);
    const heroVidRef   = useRef(null);
  
    // Try to play a video element; retry on canplay, and add a one-time user-gesture fallback.
    const tryPlay = (el) => {
        if (!el) return;
        el.muted = true;
        const attempt = () => el.play().catch(() => {
          const onFirstTouch = () => {
            el.play().finally(() => {
              document.removeEventListener("touchend", onFirstTouch);
              document.removeEventListener("click", onFirstTouch);
            });
          };
          document.addEventListener("touchend", onFirstTouch, { once: true });
          document.addEventListener("click", onFirstTouch, { once: true });
        });
        attempt();
        el.addEventListener("canplay", () => attempt(), { once: true });
      };
      
  
    useEffect(() => {
      document.body.classList.toggle("loading", loading);
    }, [loading]);
  
    useEffect(() => {
      // Kick both videos as soon as they mount
      tryPlay(loadingVidRef.current);
      tryPlay(heroVidRef.current);
    }, []);


    return (
        <>
        {loading && (
            <div className="loading-overlay">
              <video
                ref={loadingVidRef}
                className="loading-video"
                src="../Assets/Home/loading-screen.mp4"
                autoPlay
                muted
                playsInline          // iOS inline playback
                preload="auto"       // encourage buffering
                onEnded={() => setLoading(false)}
              />
            </div>
          )}
    
          <div className="home-page" style={{ visibility: loading ? "hidden" : "visible" }}>
            {/* ——— Hero (full-section video) ——— */}
            <section className="hero-section-home">
              <video
                ref={heroVidRef}
                className="hero-bg-video"
                src="../Assets/Large-Content/home-page.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => setLoading(false)}
              />
            </section>

                <section className="strip-section">
                    <div className="strip-container">
                    <div className="strip-content">
                        {loop.map((word, i) => (
                        <React.Fragment key={i}>
                            <span className="strip-text-item">{word}</span>
                            <img
                            src={sep}
                            alt=""
                            className="strip-separator"
                            />
                        </React.Fragment>
                        ))}
                    </div>
                    </div>
                </section>
        
                <section className="whats-new-section">
                    <div className="whats-new-left">
                        <h2 className="whats-new-title">what’s new</h2>
                        <p className="whats-new-subtitle">
                            with <i>solucky?</i>
                        </p>
                        <p className="whats-new-tagline">the creative brand</p>
                    </div>
                    <div className="whats-new-right">
                    <p className='paragraph-message-home'>
                        Welcome to our website – take your time to browse around. We’ve got
                        lots of exciting stuff coming up, so keep an eye out for
                        announcements, events, new inventory/merch, & more as we continue
                        to grow our brand.
                    </p>
                    <p className='paragraph-message-home'>
                        Our talented & devoted contributors team just released issue #25
                        – Winter 2025, themed ‘Clocked In’, a powerful tribute to trendy
                        corporate culture through the lens of Women’s History Month &
                        Black History Month. With an all-female cast & an extra focus on
                        Black women, this issue showcases the creativity of the modern
                        working women – capturing power dressing, leadership, & the bold
                        new era of corporate fashion (including the non-HR friendly).
                    </p>
                    </div>
                </section>

                <section className="cards-section">
                    <Link to="/shop" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                            <div className="card-face card-back">
                                <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                            </div>
                            <div className="card-face card-front">
                                <img src="../Assets/Home/card-front-1.png" alt="card front 1" />
                            </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/magazine" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-2.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/media" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-3.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                    <Link to="/collabs" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>        
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-4.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                    <Link to="/events" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-5.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/team" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-6.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about" className="card-link-wrapper" onClick={() => window.scrollTo(0, 0)}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-7.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                </section>

                <section className="flipbook-section">
                    <div className='flipbook-arrow-container'>
                        <div className="issue-arrow-container">
                            <div className="issue-arrow-caption-container">
                                <p className="issue-arrow-caption">issue #26</p>
                                <p className="issue-arrow-caption bottom-issue-arrow-caption">out now!</p>
                            </div>
                            <img src='../Assets/Home/issuearrow.svg' className='arrow-image' alt='newest-issue-below'></img> 
                        </div>
                        <img src='../Assets/Home/click2read-pointer.svg' className='arrow-image-1' alt='flip-to-read' ></img>
                    </div>
                    <div className='flipbook-canvas'>
                        <Flipbook />
                    </div>
                </section>

                <section className='spotify-playlist-section'>
                    <div className='playlist-container'>
                        <div className='spotify-pointer-container'>
                            <div className="playlist-arrow-container"> 
                                <p className="issue-arrow-caption">
                                    explore the issue #26
                                </p>
                                <p className="issue-arrow-caption playlist-bottom-caption">
                                    spotify playlist
                                </p>
                            </div>
                            <img src='../Assets/Home/playlistarrow.svg' className='arrow-image-2' alt='exlpore spotify' ></img>   
                        </div>

                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/1zwpf2nRcjwU9fKsrBBtKg?utm_source=generator"
                            width="100%"
                            height="540"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                </section>
                <Footer/>
            </div>
        </>
      );
}

export default Home;