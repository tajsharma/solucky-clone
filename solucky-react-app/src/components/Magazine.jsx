import React, {useState,useEffect} from "react";
import './Magazine.css';
import Footer from './Footer';

const paperPics = [
    "/Assets/Magazine/paper-1.png",
    "/Assets/Magazine/paper-2.png",
    "/Assets/Magazine/paper-3.png",
    "/Assets/Magazine/paper-4.png",
    "/Assets/Magazine/paper-5.png",
    "/Assets/Magazine/paper-6.png",
    "/Assets/Magazine/paper-7.png",
];

const Magazine = () =>{
    const [activeIssue, setActiveIssue] = useState(null);
    const [frame,setFrame] = useState(0);
    
    useEffect(() => {
        const id = setInterval(
        () => setFrame(f => (f + 1) % paperPics.length),
        500
        );
        return () => clearInterval(id);
    }, []);

    // basic mobile detection (viewport OR UA)
    const isMobile =
    (typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches) ||(typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    // open PDF: new tab on mobile, modal on desktop
    const openIssue = (n) => {
        // if n is null, just close the modal gracefully
        if (n == null) { setActiveIssue(null); return; }
      
        const url = `../Assets/Magazine/Magazine-issues/issue${n}.pdf#zoom=page-width`;
        if (isMobile) {
          window.open(url, "_blank", "noopener,noreferrer"); // mobile: new tab
        } else {
          setActiveIssue(n); // desktop: open modal
        }
      };
      


    return(
        <section className="magazine-page">
            <img className="right-sticky-picture" src="../Assets/Magazine/legs.png" alt="legs"></img>
            <div className="magazine-info-div">
                <div className="info-text-container">
                    <div className="top-text-container">
                        <div className="header-text-container">
                            <img src="../Assets/Magazine/solucky-magazine.svg" className="solucky-magazine-svg" alt="solucky-magazine"></img>
                        </div>
                        <div className="magazine-para-text" id="text-box">
                            At first, <i>solucky</i> began as a blog to share the founder’s passions with family & friends, 
                            where makeup, fashion, organization, decoration, & film intertwined. The blog soon gained 
                            popularity & blossomed into a multifaceted brand thanks to the endless support & 
                            collaboration of the community. In just a year, <i>solucky</i>  evolved from a blog into a magazine,
                            fueled by contributions from a devoted team of volunteers. 
                        </div>
                    </div>

                    <div className="bottom-text-container" >
                        <div className="magazine-para-text">
                            Since its first magazine issue in March 2021, <i>solucky</i>  has become a publication where every photo, 
                            video, article, & piece of art is infused with the dedication of its contributors. The brand became
                            a platform for a growing community of creatives, each contributing their passions & skills to build 
                            something greater than any one individual. Operating on no budget, each issue is a testament to the 
                            power of collaboration & community, with a unique theme & a space where creativity is not only shared 
                            but celebrated.
                        </div>
                    </div>

                </div>
                <div className="info-buttons-section">
                    <div className="buttons-container">
                        <a className="button-1" href="https://docs.google.com/forms/d/e/1FAIpQLSfmkJhfxa21u6Ra73YU7w1e-ue28Lu_aCw-9ra_geHn6Ibn3g/viewform">
                            <button className="magazine-button">
                                <p className="centered-p-bai-jamjuree">subscribe to <i>solucky</i> magazine</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                        <a  className="button-2" href="/media">
                            <button className="magazine-button">
                                <p className="centered-p-bai-jamjuree">view all magazine media</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                        <a className="button-3" href="https://docs.google.com/forms/d/e/1FAIpQLSe81g9uPNPingKHngREZ5MpHuUFtI-zXEeOLqVayNIC6Ba2Sg/viewform">
                            <button className="magazine-button">
                                <p className="centered-p-bai-jamjuree">join the <i>solucky</i> team</p>
                                <img className="button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                            </button>
                        </a>
                        
                    </div>
                    <img className="pointer-text-image" src="../Assets/Magazine/magazine-pointer.svg" alt="magazine below ↓"></img>
                </div>


            </div>

            <div className="cover-hover-section">
                <div className="alt-pointer-div">
                  <img className="pointer-text-image-alt" src="../Assets/Magazine/magazine-pointer-alt.svg" alt="magazine below ↓"></img>  
                </div>
                
                {activeIssue && (
                    <div className="pdf-modal" onClick={() => setActiveIssue(null)}>
                        <div className="pdf-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setActiveIssue(null)}>✕</button>
                            <iframe
                                className="pdf-frame"
                                src={`../Assets/Magazine/Magazine-issues/issue${activeIssue}.pdf#zoom=page-width`}
                                title={`Magazine Issue ${activeIssue}`}
                                width="100%"
                                height="100%"
                            />

                        </div>
                    </div>
                )}
                <div className="covers-container">
                    <div className="cover-box" id="next-issue-gif">
                        <img
                            src={paperPics[frame]}
                            alt={`preview ${frame+1}`}
                            className="paper-gif-frame"
                        />
                    </div>
                    <div className="cover-box" id="magazine-25" onClick={() => openIssue(25)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover25.png" alt="mag23"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover25.png" alt="hov23"></img>
                    </div>
                    <div className="cover-box" id="magazine-24" onClick={() => openIssue(24)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover24.png" alt="mag23"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover24.png" alt="hov23"></img>
                    </div>
                    <div className="cover-box" id="magazine-23" onClick={() => openIssue(23)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover23.png" alt="mag23"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover23.png" alt="hov23"></img>
                    </div>
                    <div className="cover-box" id="magazine-22" onClick={() => openIssue(22)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover22.png" alt="mag22"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover22.png" alt="hov22"></img>
                    </div>
                    <div className="cover-box" id="magazine-21" onClick={() => openIssue(21)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover21.png" alt="mag21"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover21.png" alt="hov21"></img>
                    </div>
                    <div className="cover-box" id="magazine-20" onClick={() => openIssue(20)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover20.png" alt="mag20"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover20.png" alt="hov20"></img>
                    </div>
                    <div className="cover-box" id="magazine-19" onClick={() => openIssue(19)} style={{ cursor: "pointer" }}>
                    <img className="magazine-picture" src="../Assets/Magazine/cover19.png" alt="mag19"></img>
                    <img className="hover-picture" src="../Assets/Magazine/hover19.png" alt="hov19"></img>
                    </div>
                    <div className="cover-box" id="magazine-18" onClick={() => openIssue(18)} style={{ cursor: "pointer" }}>
                    <img className="magazine-picture" src="../Assets/Magazine/cover18.png" alt="mag18"></img>
                    <img className="hover-picture" src="../Assets/Magazine/hover18.png" alt="hov18"></img>
                    </div>
                    <div className="cover-box" id="magazine-17" onClick={() => openIssue(17)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover17.png" alt="mag17"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover17.png" alt="hov17"></img>
                    </div>
                    <div className="cover-box" id="magazine-16" onClick={() => openIssue(16)} style={{ cursor: "pointer" }}>
                    <img className="magazine-picture" src="../Assets/Magazine/cover16.png" alt="mag16"></img>
                    <img className="hover-picture" src="../Assets/Magazine/hover16.png" alt="hov16"></img>
                    </div>
                    <div className="cover-box" id="magazine-15" onClick={() => openIssue(15)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover15.png" alt="mag15"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover15.png" alt="hov15"></img>
                    </div>
                    <div className="cover-box" id="magazine-14" onClick={() => openIssue(14)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover14.png" alt="mag14"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover14.png" alt="hov14"></img>
                    </div>
                    <div className="cover-box" id="magazine-13" onClick={() => openIssue(13)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover13.png" alt="mag13"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover13.png" alt="hov13"></img>
                    </div>
                    <div className="cover-box" id="magazine-12" onClick={() => openIssue(12)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover12.png" alt="mag12"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover12.png" alt="hov12"></img>
                    </div>
                    <div className="cover-box" id="magazine-11" onClick={() => openIssue(11)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover11.png" alt="mag11"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover11.png" alt="hov11"></img>
                    </div>
                    <div className="cover-box" id="magazine-10" onClick={() => openIssue(10)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover10.png" alt="mag10"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover10.png" alt="hov10"></img>
                    </div>
                    <div className="cover-box" id="magazine-9" onClick={() => openIssue(9)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover9.png" alt="mag9"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover9.png" alt="hov9"></img>
                    </div>
                    <div className="cover-box" id="magazine-8" onClick={() => openIssue(8)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover8.png" alt="mag8"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover8.png" alt="hov8"></img>
                    </div>
                    <div className="cover-box" id="magazine-7" onClick={() => openIssue(7)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover7.png" alt="mag7"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover7.png" alt="hov7"></img>
                    </div>
                    <div className="cover-box" id="magazine-6" onClick={() => openIssue(6)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover6.png" alt="mag6"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover6.png" alt="hov6"></img>
                    </div>
                    <div className="cover-box" id="magazine-5" onClick={() => openIssue(5)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover5.png" alt="mag5"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover5.png" alt="hov5"></img>
                    </div>
                    <div className="cover-box" id="magazine-4" onClick={() => openIssue(4)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover4.png" alt="mag4"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover4.png" alt="hov4"></img>
                    </div>
                    <div className="cover-box" id="magazine-3" onClick={() => openIssue(3)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover3.png" alt="mag3"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover3.png" alt="hov3"></img>
                    </div>
                    <div className="cover-box" id="magazine-2" onClick={() => openIssue(2)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover2.png" alt="mag2"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover2.png" alt="hov2"></img>
                    </div>
                    <div className="cover-box" id="magazine-1" onClick={() => openIssue(1)} style={{ cursor: "pointer" }}>
                        <img className="magazine-picture" src="../Assets/Magazine/cover1.png" alt="mag1"></img>
                        <img className="hover-picture" src="../Assets/Magazine/hover1.png" alt="hov1"></img>
                    </div>
                </div>
            </div>
        
        <Footer/>
        </section>       
    )
}

export default Magazine;