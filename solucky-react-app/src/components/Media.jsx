import React, { useState } from "react";
import './Media.css';
import Footer from './Footer';
import EmbeddedContent from "./EmbeddedContent";
import Gallery from "./Gallery";

// Define your media items here
const mediaData = {
  'shoot1': {
    title: 'WELCOME TO THE SLEEPOVER',
    date:  'September 2022',
    description: '',
    images: [
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505652/COVER_zmi5re.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505663/046FC060-ED89-4702-8268-3686E640E113_aapuhu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505663/87944D31-6BE3-476C-A952-9BEC42B856CD_bcp7lb.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505663/E85112E0-5C8E-402F-BBAC-9872AC22690E_kfv1gx.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505663/IMG_7574_ifyeh8.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505662/AC62597D-D4EF-4C89-8825-9852AB5AECDF_oy7hcu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505661/IMG_7661_hpjidr.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505661/IMG_7642_x8kaul.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505661/05C57DFE-98CA-4781-BE92-B780046BAB6C_cnv9jf.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505660/IMG_7689_xbirfs.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505660/19E6733B-ED6D-4F28-A536-8C9666B27B4D_qzczre.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505660/358D543A-7CEC-44D4-91E1-16863199C772_c60nkj.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505659/60AE266D-F628-4B6C-A796-CA02597734A6_l5s5aq.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505659/E7C79B10-E699-471C-A4F4-F7F1C77E75FA_fnfwmr.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505658/CE1E7658-6CD0-499A-A306-ED89886F3C30_jgh5ex.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505658/4CD7F61D-F04A-40C7-89D1-2FA7D09E580B_ba5o2i.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505657/3FE3C207-B5CB-436C-B81A-E4FFA6FB8456_i8qqrv.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505657/328012CA-7932-457B-9B7B-FD17BD3D671C_ee8iuq.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505657/IMG_7788_hqoiyu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505657/228B90E4-7E77-4FB8-A5E1-84ADFAE851C3_muts1m.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505656/IMG_7938_r9arap.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505655/E41AA9A0-C37A-4D95-B9CB-9DBE306559D0_r7jtsu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505655/BC518969-1869-4037-9566-69900208C940_xrxvob.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505655/887C6708-15E5-4D2D-A5C8-1841738F6FAA_feqoon.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505655/IMG_7991_uoju70.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505655/IMG_8006_c58neu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505654/8C1F71E0-A980-4E7D-A303-47D2068EA44E_j1vyll.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505654/2F6C567F-0C00-4E33-8ABA-C6F767D44C00_ieeets.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505653/IMG_7997_yhpwkt.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505653/IMG_8075_bh1bsj.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749505653/COVER_PHOTO_xtck6z.jpg',
    ],
    thumbnail: 'https://res.cloudinary.com/dltjxocio/image/upload/v1749505652/COVER_zmi5re.jpg',
    issue: '14',
  },
  'shoot2': {
    title: 'UPTOWN GIRL',
    date: 'February 2022',
    description: '',
    images: [
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506099/COVER_mztuzx.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506106/IMG_6749_iu469b.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506102/IMG_6800_wsfhvk.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506100/IMG_6791_ys3xlu.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506101/IMG_6803_cvyvhr.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506100/IMG_6788_lvmdw5.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506099/IMG_6793_rb74ig.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506098/IMG_6733_pkmb6z.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506097/IMG_6764_xrhevs.jpg'
    ],
    thumbnail: 'https://res.cloudinary.com/dltjxocio/image/upload/v1749506099/COVER_mztuzx.jpg',
    issue: '11',
  },

  'shoot3': {
    title: 'UPPER EAST SIDE’S RUNAWAY BRIDE',
    date: 'October 2023',
    description: '',
    images: [
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506626/COVER_edab7z.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507156/IMG_5651_vfwk2z.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507155/IMG_5707_wvy375.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507153/IMG_5670_pqrzbl.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507152/IMG_5718_usnkv7.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507151/IMG_5643_d1h1sn.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507150/IMG_5546_uxoylt.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507149/IMG_5550_fnjrlw.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507148/IMG_5554_md7p04.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507147/IMG_5562_eqv06o.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507146/IMG_5563_dat4uo.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507145/IMG_5571_hm7vmg.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507144/IMG_5586_g9hecm.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507142/IMG_5595_zxy275.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507142/IMG_5599_gqrrqe.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507140/IMG_5609_fdciyb.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507139/IMG_3594_neyjev.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507139/IMG_5474_lykpfm.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507138/IMG_5535_au1lb0.jpg',
      'https://res.cloudinary.com/dltjxocio/video/upload/v1749506477/final_main_centered_text_video_cdw76r.mp4',
      'https://res.cloudinary.com/dltjxocio/video/upload/v1749506476/final_photo_centered_vcpjrp.mp4',
      
    ],
    thumbnail: 'https://res.cloudinary.com/dltjxocio/image/upload/v1749506626/COVER_edab7z.jpg',
    issue: '19',
  },

    'shoot4': {
    title: 'UPPER EAST SIDE’S RUNAWAY BRIDE',
    date: 'October 2023',
    description: '',
    images: [
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749506626/COVER_edab7z.jpg',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507142/IMG_5599_gqrrqe.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507140/IMG_5609_fdciyb.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507139/IMG_3594_neyjev.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507139/IMG_5474_lykpfm.jpg',
      'https://res.cloudinary.com/dltjxocio/image/upload/v1749507138/IMG_5535_au1lb0.jpg',
      'https://res.cloudinary.com/dltjxocio/video/upload/v1749506477/final_main_centered_text_video_cdw76r.mp4',
      'https://res.cloudinary.com/dltjxocio/video/upload/v1749506476/final_photo_centered_vcpjrp.mp4',
      
    ],
    thumbnail: 'https://res.cloudinary.com/dltjxocio/image/upload/v1749506626/COVER_edab7z.jpg',
    issue: '19',
  },


};


const Media = () => {
    const [openMediaKey, setOpenMediaKey] = useState(null);

    // prepare array for EmbeddedContent
    const items = Object.entries(mediaData).map(([id, { title, issue, thumbnail }]) => ({
        id,
        title,
        issue,
        thumbnail,
    }));

    return(
        <div className="media-page">
            <div className="video-text-container">
            <video autoPlay loop muted playsInline>
                <source src="../Assets/Media/text-video.mp4" type="video/mp4" />
            </video>
            <div className="text-box-media">
                <h1 className="media-header-text">MEDIA</h1>
            </div>
            </div>
            <div className="media-info-container">
                <div className="media-info-title">
                    our creative evolution
                </div>
                <div className="media-paragraph-text">
                    At <i>solucky</i>, our team's creativity shines through captivating editorial content.
                    Every few months, we release a magazine issue featuring three to four main photoshoots,
                    showcasing artistic flair & countless hours of dedication to an eccentric theme. From 
                    our early days to now, our media reflects a growing community driven by collaboration,
                    creativity, & storytelling. Explore photos, videos, & highlights from our magazine issues,
                    events, & collaborations, capturing the evolution of our brand.
                </div>
            </div>

           <div className="macbook-interact-container">
                <div className="interact-text-wrapper">
                    <img className="media-arrow-svg" src="../Assets/Media/interact-text-arrow.svg" alt="" />
                </div>

                <div className="macbook-image-wrapper">
                    <img className="macbook-image" src="../Assets/Media/macbook.svg" alt="" />
                    <div className="laptop-screen-frame">
                        <div className="embedded-frame-wrapper">
                            <EmbeddedContent items={items} onSelect={setOpenMediaKey} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="small-screen-interact-container">
                <div className="alt-interact-text-wrapper">
                    <img className="alt-media-arrow-svg" src="../Assets/Media/alt-interact-text-arrow.svg" />
                </div>
                
                {items.map(({ id, title, issue, thumbnail }) => (
                    <div
                        key={id}
                        className="small-screen-card"
                        onClick={() => setOpenMediaKey(id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                        src={thumbnail}
                        alt={title}
                        className="small-screen-thumb"
                        />
                        <div className="small-screen-title">{title}</div>
                        <div className="small-screen-issue">Issue {issue}</div>
                    </div>
                ))}
            </div>

            {openMediaKey && (
                <Gallery
                title={mediaData[openMediaKey].title}
                date={mediaData[openMediaKey].date}
                description={mediaData[openMediaKey].description}
                images={mediaData[openMediaKey].images}
                onClose={() => setOpenMediaKey(null)}
                />
            )}
            <Footer/>
        </div>
    )
}

export default Media