// src/components/Events.jsx

import React, { useState, useEffect } from "react";
import "./Events.css";
import Footer from "./Footer";
import Gallery from "./Gallery";

const stripPhrases = [
    "From SF to LA & NYC: Broadening Our Events in 2025 ✈️",
    "Get Lucky: St. Patty's Celebration 2025 🍀",
    "Celebrate With Us: Our 5th Anniversary 🥂",
    "Paint the Town: Holi 2025 🌈",
    "Jingle & Mingle: Christmas Party 2025 🎄",
  ];

const galleryData = {
  "the-chai-room": {
    title: "The Chai Room",
    date: "March 2023",
    description:
      "To honor Women’s History Month on March 13, 2025, solucky co-hosted an event in Oakland at Kinfolx - a cozy conversation space for South Asian wxmn creatives. Featuring chai, lo-fi music, henna, & curated shopping, the night celebrated community, creativity, and culture.",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493119/IMG_4177_iabq8l.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493118/IMG_4171_ha1lrl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493117/IMG_4208_ug7xs4.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493117/IMG_4221_eztrka.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493117/IMG_4233_l4cd0k.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493116/IMG_4223_njxpba.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493116/IMG_4237_qoehrh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493115/IMG_4239_cdfkmb.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493115/IMG_4248_qqt3hl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493114/IMG_4241_cbxphj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493114/IMG_4258_ohzl5u.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493113/IMG_4267_x0cobf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493112/IMG_4392_k09bgj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493112/IMG_4400_bekusp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493112/IMG_4403_ag9i3k.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493111/IMG_4406_lbxlus.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493111/IMG_4411_goxkp9.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493110/IMG_4433_sglu4u.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493110/IMG_4415_kgefaf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493110/IMG_4426_b0quvx.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493109/IMG_4438_h2x2ye.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493108/IMG_4462_mai7hl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493108/IMG_4443_rljvn1.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493108/IMG_4475_xoiuuu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493107/IMG_4481_z0gmhg.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493107/IMG_4487_h7zbfl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493106/IMG_4491_jdbupl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493106/IMG_4505_xsxydz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493106/IMG_4499_ulpazx.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493105/IMG_4509_ydripq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493104/IMG_4277_hf7lsh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493104/IMG_4299_mxtpo0.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493104/IMG_4349_rcocpi.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493103/IMG_4376_qws0ts.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493103/IMG_4359_fsbfmu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493103/IMG_4385_ydzw7o.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493103/IMG_4321_cubjmz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493101/IMG_4388_uvolhh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493101/IMG_4368_e9lk36.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493101/IMG_4383_ramarq.jpg",
    ],
  },

  "4th-anni": {
    title: "4TH ANNIVERSARY",
    date: "AUGUST 25th 2023",
    description:
      "To celebrate solucky’s fourth anniversary on September 14th, 2024, we hosted an intimate South Bay Area gathering with our team & closest supporters. It was a moment to toast four years of creativity, growth, & shared memories, filled with laughter, gratitude, & appreciation for the milestones we've achieved together.",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444705/000057060010_q7yxuj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444703/000057060014_bx2sxh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444702/000057060018_empvqo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444701/000057060011_vxb78f.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444699/000057060015_g8hux8.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444698/000057060009_ytrl6l.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444697/000057060020_czrwim.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444696/000057060013_gqtpvk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444695/000057060001_ivnyfc.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444694/000057060017_z5i6qo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445691/IMG_9130_xwyuth_kquqdq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749444691/COVER_pcj8ff.jpg",
    ],
  },

  "diwali-event": {
    title: "DIWALI AFTER DARK",
    date: "October 2024",
    description: " On October 19, 2024, in San Ramon, 'Once Upon a Mehendi' transformed from a photoshoot into an enchanting Diwali celebration. Guests enjoyed skilled mehendi artists, delectable food, & crafted drinks. The vibrant atmosphere blended Diwali's timeless charm with modern nightlife energy, creating a joyful, unforgettable evening.",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03485_jzsahs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445786/DSC03482_yx9tfz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445785/DSC03514_awlq5g.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445784/DSC03518_uub6ty.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445784/DSC03527_i9jvcq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445783/DSC03530_iyv6vp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445782/DSC03531_icrery.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445781/DSC03534_pijikv.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445781/DSC03554_xd4r1e.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445780/COVER_peytde.jpg",
    ],
  },

  "halloween-event": {
    title: "HALLOWEEN RAGER",
    date: "November 2023",
    description: "We teamed up with Stax Co. for a “Heaven or Hell” rager on 11/03 in Downtown San Jose near San Jose State University. The event featured creative costumes, lively dancing, & refreshing drinks, celebrating one of the year’s most exciting holidays. Stax Co., known for blending music, fashion, & immersive experiences, made this inaugural Halloween celebration an unforgettable night, bringing together a spirited crowd & fostering new connections.   ",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443918/IMG_0258_wezh4j.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443917/IMG_0302_sth4qt.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443917/IMG_0294_dwmgtu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443915/IMG_0308_o6ves1.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443915/IMG_0310_atg2ib.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443915/IMG_0311_uvimss.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443912/IMG_0319_fv8uoy.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443911/IMG_0322_rhutqf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443911/IMG_0323_s6ciwk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443910/IMG_0326_gmdxof.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443909/IMG_0324_r0mi2b.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443909/IMG_0321_ukekqe.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443901/IMG_6691_p65qzi.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443901/IMG_6689_t6dx2x.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749443899/COVER_l7q8dy.jpg" 
    ],
  },

  "3rd-anni": {
    title: "3RD ANNIVERSARY",
    date: " August 2023",
    description: "Our brand’s third anniversary was celebrated at an unforgettable Boiler Room event in collaboration with Casino Bleu on Friday, 8/25, near UC Berkeley. The Euro-club themed event brought together a lively crowd for dancing, drinks, & vibrant energy. Casino Bleu, founded by Shlok Gore & Ishaan Ghose, is known for its fusion of art forms, creating unique experiences through music, food, & fashion, making them the perfect partner for this special celebration.",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329318/IMG_9817_si01ow.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329317/IMG_9813_nlyntw.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329316/IMG_9811_cwqimk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329314/IMG_9822_oqj9co.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329313/IMG_9824_kpkaa5.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329308/IMG_9848_r6vs3e.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329307/IMG_9847_qtkx5m.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329306/IMG_9849_gem0vd.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329304/IMG_9843_ylyws6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329303/IMG_9850_smooz2.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329306/IMG_9849_gem0vd.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329304/IMG_9843_ylyws6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329303/IMG_9850_smooz2.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329302/IMG_9857_cf2yhu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749329301/COVER_jlkttg.jpg",
    ],
  },

  "clothing-tour": {
    title: "POP-UP SALES",
    date: "August 2022 to Present",
    description: "Since August 2022, we’ve hosted pop-up clothing sales in Berkeley, San Jose, & Santa Cruz, catering to college students seeking stylish & budget friendly wardrobes. Inspired by magazine themes like Y2K, South Asian attire, & European summer, our curated second hand inventory features items under $25, with most under $10, offering a personal & sustainable shopping experience.",
    images: [
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447178/IMG_8438_ihgzxq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447176/IMG_8446_p4ut2a.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447175/IMG_8442_i2zrco.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447174/IMG_8440_iocpfm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447171/IMG_8447_pudbvq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447170/IMG_8449_vnptkq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447169/IMG_8443_t0chal.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447168/IMG_8450_wjzoex.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447167/IMG_8453_nadzrk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447165/IMG_8454_zwglb5.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447164/IMG_8451_clv9nz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447163/IMG_8459_cqvuij.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447131/IMG_8461_u3mrsn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447053/IMG_0003_ie9psk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447053/IMG_0005_f1lxvp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447049/IMG_0021_xlyhcm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447047/IMG_0010_q1xej8.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447044/000058690003_ceyjah.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749447042/COVER_uoismn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448050/IMG_7149_tqqr0o_foxdfs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448051/IMG_7118_w67emp_o1n6ww.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448054/IMG_7147_g1qghm_bclebq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448056/IMG_7125_hqhq5b_sz6ccf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448058/IMG_0057_zdgftg_ktr63j.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448060/IMG_7128_k69mym_y3fw7k.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448062/IMG_8779_mgmtiw_ry0hmx.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448063/IMG_0066_lknife_qskd4r.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448065/IMG_1346_obhkta_v5rjlf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448067/IMG_8784_q6h9uk_my9xvo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749448069/IMG_7144_hkftjm_fxjqw2.jpg",
    ],
  },
};


const Events = () => {
  const [openGalleryKey, setOpenGalleryKey] = useState(null);
  const [stripIndex, setStripIndex] = useState(0);
  const data = openGalleryKey ? galleryData[openGalleryKey] : null;

  useEffect(() => {
      const id = setInterval(() => {
        setStripIndex(i => (i + 1) % stripPhrases.length);
      }, 4000);                // change every 4 seconds
      return () => clearInterval(id);
    }, []);

  return (
    <div className="events-page">
      {/* Landing and intro sections */}
      <section className="landing-section">
        <div className="iphone-paragraph-container">
          <div className="iphone-container">
            <img src="../Assets/Events/stay-tuned2.svg" className="stay-tuned-alt" alt="stay tuned"/>
            <img src="../Assets/Events/iphone.png" className="iphone-pic" alt="iphone"/>
          </div>

          <div className="para-text-container">
            <img className="the-art-of-text" src="../Assets/Events/theartof-text.png"alt="the art of"/>
            <p className="events-header-text">connection</p>
            <p className="events-para-text">
              Our brand thrives on bringing creative energy to life through events
              & pop-up shops that foster community connections. From our
              anniversary parties to holiday celebrations, each gathering
              highlights culture, collaboration, & artistry.
            </p>
            <p className="events-para-text">
              Moving forward, plan to expand our events with casual picnics,
              cultural celebrations, immersive experiences, & more. We aim to
              unite people in fresh & impactful ways, crafting memorable moments
              beyond the pages of our magazine.
            </p>
            <img className="stay-tuned-text" src="../Assets/Events/stay-tuned-text.svg" alt="stay tuned" />
          </div>
        </div>
      </section>

      {/* Separator strip */}
      <section className="moving-strip">
        <p className="strip-text">{stripPhrases[stripIndex]}</p>
      </section>

      <section className="events-media-mobile-container">
        <img src="../Assets/Events/events-media-tablet-text.svg" className="events-media-tablet-text"></img>
      </section>

      {/* Events thumbnails */}
      <section className="events-section">
        {Object.keys(galleryData).map((key) => (
          <div className="hover-section" key={key}>
            <img
              src={`../Assets/Events/${key}.png`}
              className="event-picture"
              alt={key}
            />
            <button
              type="button"
              className="gallery-button"
              onClick={() => setOpenGalleryKey(key)}
            >
              <p className="event-button-text">view</p>
            </button>
          </div>
        ))}
      </section>

      {/* Gallery modal */}
      {openGalleryKey && (
        <Gallery
          images={data.images}
          title={data.title}
          date={data.date}
          description={data.description}
          onClose={() => setOpenGalleryKey(null)}
      />
      )}

      <Footer />
    </div>
  );
};

export default Events;
