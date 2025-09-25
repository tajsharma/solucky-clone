import React, {useState} from 'react';
import './Collabs.css';
import Footer from './Footer';
import Gallery from './Gallery';

const collabData = {
  'gardenia': {
    title: 'gardenia',
    date: 'Spring 2025',
    description: 'We partnered with Gardenia, a Los Gatos coffee house, restaurant, & event space. Set in a Victorian-style mansion, this location blends ethically sourced coffee with Asian-fusion cuisine & French gastronomy. Gardenia celebrated their “Year in Bloom,” with curated specials, live music, & community gatherings that showcase culture, flavor, & creativity.',
    thumbnail: '../Assets/Collabs/collab-22.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834948/FIRST_1_koqwdf.jpg", 
      '../Assets/Large-Content/gardenia-video.MP4',
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834948/COVER_t1llqf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834947/_DSC0438-Enhanced-NR_fwi4ck.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834947/_DSC0414-Enhanced-NR_vh4qjw.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834945/_DSC0075-Enhanced-NR_ngofgw.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834946/_DSC0241-Enhanced-NR_nkcnzt.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1758834945/_DSC0067-Enhanced-NR_rh6bhs.jpg"
    ]
  },

  'merazine': {
    title: 'merazine',
    date: 'April 2025',
    description: 'We teamed up with fashion platform Merazine for a contest themed “Corporate Siren”: a bold, office-ready look made for the boardroom & the timeline. Users styled avatars with emerging brand pieces leading with the winner scoring a solucky bundle of 15 thrifted items. This collaboration celebrated dressing with purpose & personality.',
    thumbnail: '../Assets/Collabs/collab-19.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458396/COVER_hpagr6.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458406/IMG_4861_tatxpx.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458404/IMG_4859_dhg3lm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458403/IMG_4867_mxylpj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458403/IMG_4869_ihoq0z.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458401/IMG_4874_ywgznf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458401/IMG_4870_fztqym.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458399/IMG_4876_gsilui.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458398/IMG_4878_zoq0s6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458397/LAST_fmj0ys.png",
    ]
  },
  'classic-loot': {
    title: 'classic loot',
    date: 'April 2025',
    description: 'We collaborated with Classic Loot, a Japantown thrift shop curating unique pieces with/from small businesses. They provided standout clothing, paired with solucky wardrobe items, to create bold & office-ready looks. This collaboration celebrated sustainable fashion while celebrating sustainability, local vendors, & fashion with purpose.',
    thumbnail: '../Assets/Collabs/collab-20.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458198/COVER_1_alq8rw.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458208/DSC_0294_aorz8b.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458207/DSC_0331_y226vp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458206/DSC_0519_wltzmj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458205/DSC_0531-2_wqbo51.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458204/DSC_0635_yfnd4j.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458202/_DSF1972_tybwga.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458200/FIRST_1_ge80gd.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458200/_DSF2134_3_aaqhwi.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458200/_DSF2330_1_o3qncp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458200/_DSF2422_1_ylzlx6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749490738/DSC_0850_rqhdr6.jpg"
    ]
  },
  'the-chai-room': {
    title: 'the chai room',
    date: 'March 2025',
    description: 'To honor Women’s History Month on March 13, 2025, solucky co-hosted an event in Oakland at Kinfolx - a cozy conversation space for South Asian wxmn creatives. Featuring chai, lo-fi music, henna, & curated shopping, the night celebrated community, creativity, and culture.',
    thumbnail: '../Assets/Collabs/collab-21.png',
    images:[
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
    ]
  },

  'snap-choreography': {
    title:'snap choreography',
    date: 'November 2024',
    description: 'We joined forces with Snap Choreography, founded by Swetha Nair & Alaan Patel, a duo blending dance & creativity since college. For solucky, they guided their team to create stunning choreography, adding a dynamic, vibrant touch to our photos/videos. We’re grateful for their partnership, capturing the essence of movement in Issue #23.e',
    thumbnail: '../Assets/Collabs/collab-1.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459313/COVER_rvjvw7.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459341/DSC_1858_mgrm0n.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459340/805137D5-802F-4870-A451-92DDA34E7E2E_wfhtjb.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459340/DSC_1825_bvdu1c.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459339/DSC_2305_fa83ed.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459338/DSC_1877_emzw38.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459334/15516018-B4D1-42A4-87DE-B8C5EC82AE47_chwvkz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459332/DSC_2291_mjepqz.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459331/91060A39-D745-47E4-A4C8-66FE52703901_i8pltl.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459331/DSC_1847_f5rexh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459329/DSC_1844_a3czqw.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459327/DSC_1832_inxhth.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459324/_DSC0100_nmibji.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459323/_DSC0115_usgx0q.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459321/_DSC0079_nita7z.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459319/_DSC0714-Enhanced-NR_vld99w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459318/_DSC0387_hocrfk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459317/_DSC0199-Enhanced-NR_pp5tx3.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459315/_DSC0217_kgr1cq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459306/IMG_3954_e5x2oj.jpg",
      "https://res.cloudinary.com/dltjxocio/video/upload/v1749459316/FIRST_4_gke4go.mp4"
    ]
  },

    'tarana': {
    title: 'tarana',
    date: 'October 2024',
    description: ' For our Navaratri Lights shoot in Issue #23, we brought in Tarana, founded by Aishwarya Mathur, Jully Ganatra, & Shruti Kataria. Tarana specializes in tribal Afghani jewelry & handbags, blending tradition with contemporary style. Their pieces, reflecting the vibrant colors & rich heritage of Gujarat, complemented our Navaratri celebration perfectly.',
    thumbnail: '../Assets/Collabs/collab-2.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493799/COVER_PHOTO_t1iwka.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493807/_DSC0280-Enhanced-NR_qxv5r1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493807/_DSC0280-Enhanced-NR-2_dzo0bi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493806/_DSC0367-Enhanced-NR_l6eeym.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493805/_DSC0373-Enhanced-NR_f6ng1x.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493805/_DSC0370-Enhanced-NR_cf1l3g.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493803/_DSC0364-Enhanced-NR_jh6ess.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493802/_DSC0369-Enhanced-NR-2_snkike.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493801/_DSC0389-Enhanced-NR_dacciu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493801/_DSC0369-Enhanced-NR_pik9wk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749493800/_DSC0400-Enhanced-NR_jphsjd.jpg",
    ]   
    },

    'mehendi-by-smriti': {
    title: 'mehendi by smriti',
    date: 'October 2024',
    description: ' For Issue #23, we worked alongside Mehendi by Smriti. With 15+ years of experience, Smriti Panchal brought her artistry to this magazine issue & our Diwali After Dark event. Her intricate designs added cultural depth & beauty to every detail, elevating the magazine issue & showcasing the timeless significance of mehendi in an unforgettable way.',
    thumbnail: '../Assets/Collabs/collab-3.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493969/COVER_brcip2.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493983/DSC_2501_kbqvp3.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493981/DSC_1946_ytxn1t.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493979/DSC_2499_fxzhyf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493974/_DSC0330_dixa2e.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493973/_DSC0347_mpsdaq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493972/_DSC0297-Enhanced-NR_fwnh91.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493971/_DSC0298_wchyof.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749493970/_DSC0349_iszj9z.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494311/DSC_2459_n7610n.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494312/DSC_2440_cycmbt.jpg",
    ]
  },

    'palam': {
    title: 'palam-collective',
    date: 'October 2024',
    description: 'We were thrilled to collaborate with Palam Collective, founded by Keertana Padmanaban, for our 3-in-1 photoshoot showcasing 1 piece styled in 3 different ways. The brand blends South Indian craftsmanship with sustainable fashion, honoring both tradition & contemporary design. Keertana’s dedication to sustainability & heritage made Palam Collective the perfect fit for the shoot.',
    thumbnail: '../Assets/Collabs/collab-4.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494598/COVER_jqnzdn.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494606/IMG_0764_ltvly0.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494605/IMG_0784_tibuu3.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494603/IMG_0265_fvfcve.jpg",
      "https://res.cloudinary.com/dltjxocio/video/upload/v1749494620/FIRST_1_zgpe09.mp4",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494602/IMG_0184_rd6tdb.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494600/IMG_0136_oml29u.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749494600/IMG_0120_gaibzi.jpg",
    ]
  },

    'kaju-studios': {
    title: 'kaju studios',
    date: 'October 2024',
    description: 'In Issue #23, solucky collaborated with Kaju Studios for the Once Upon A Mehendi photoshoot. Founded by Tara & Daivi Patel & inspired by their favorite treat, Kaju Katli, the brand creates versatile jewelry that pairs with both Desi and Western looks, celebrating cultural pride & individuality.',
    thumbnail: '../Assets/Collabs/collab-5.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494851/COVER_cas7yn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494854/COVER_PHOTO_kpbisr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494855/_DSC0273_t7trbi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494857/_DSC0245_pboo4l.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494858/_DSC0240_rvmg8s.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494860/_DSC0227_wzgdqf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494862/_DSC0230-2-2_junfop.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494966/_DSC0273-2_x6izpo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494973/_DSC0230-2_oxe4it.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494975/_DSC0257_juynob.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494976/_DSC0248_tbz4gu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494978/_DSC0252_vhlkqp.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494980/_DSC0225_wzxbbw.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494981/_DSC0222-2_yf9pol.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494983/_DSC0254_ttdfza.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494985/_DSC0275-2_jzxo43.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494987/_DSC0237_lxaeuz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494988/_DSC0222_tkiu70.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494990/_DSC0268_tsonij.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749494993/_DSC0266_phxzah.jpg", 
    ]
  },

    'holly': {
    title: 'holly',
    date: '',
    description: '',
    thumbnail: '../Assets/Collabs/collab-6.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749495990/COVER_l7e8t0.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749495991/LAST_2_u5mtoi.jpg", 
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749496008/AQPjujdQsW-lK5b0MbKLxzJLtpKkifr756K7-qAElQHJxfVlLP09q6LrRrlE9lTC-TFC4hnw2RUNB7Gvb51zElLyJ1h2ZqceuF-6KVw_fyokcs.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749496010/AQMr70jwACP3yZcTwjzAVitJpIXkI_GssSwRc99bWTfESLgpHR1Gi0Vzwihlitv0CcEgcv7E8Pw6IXd422X_oTRqIbtt1WsEFRPxmU8_1_uup8ux.mp4", 
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749496012/AQPF-siDNGdpZrRhPV7EDV8R6BzrgQzV8LyQZ0BucUSFACpMpptN1IfpQ5BNgbdhP0bFZd9d546JF5b7ZpEU3XV9CuymDeEuUG35USg_1_pzyuiy.mp4",
    ]
  },

    'pearlescent-x-reya': {
    title: 'pearlescent x reya',
    date: 'November 2023',
    description: 'In this magazine issue, we featured a collaboration with Pearlescent & Reya. Manya Patel’s handmade jewelry & Shreya Patel’s bold art brought a chic, artistic touch to our Gossip Girl-themed issue. Manya’s unique pieces add flair to any outfit, while Shreya’s maximalist art, blending fabric & metal, enriches the issue with vibrant visuals.',
    thumbnail: '../Assets/Collabs/collab-7.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496877/COVER_jvcati.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496452/IMG_4203-Edit_ucfrwi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496452/IMG_4155-Edit_nbonyp.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496449/IMG_4257-Edit_tobj2k.jpg",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749496444/FIRST_1_nxxjiw.mp4", 
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749496443/FIRST_2_gznhag.mp4",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496875/IMG_5093_inpyts.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496879/IMG_4214_ah1zdj.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496881/IMG_4117_elc5n8.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496884/IMG_5075_hj1i8x.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496886/IMG_5199_1_zoniiz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749496888/IMG_5786_vvwvse.jpg", 
    ]
  },

    'stax-co-podcast': {
    title: 'stax co. (podcast)',
    date: 'December 2023',
    description: 'Our brand’s journey took center stage in a conversation with Lukas Maciel on the Stax Co. podcast. This interview covered the passion behind our creative pursuits, challenges of running a brand, & exciting future plans. Lukas’s thoughtful interview approach provided a refreshing perspective, valuable insights, & the realities of managing a creative brand.',
    thumbnail: '../Assets/Collabs/collab-8.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497365/COVER_erotxm.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497264/Sanjana_s_Thumnail_2_fp6ujy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497263/stax_d9czp3.jpg", 
    ]
  },


    'stax-co-event': {
    title: 'stax co. (event)',
    date: 'December 2023',
    description: 'Event with Stax Co',
    thumbnail: '../Assets/Collabs/collab-9.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497365/COVER_erotxm.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497264/Sanjana_s_Thumnail_2_fp6ujy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497263/stax_d9czp3.jpg", 
    ]
  },

    'evolve-with-fashion': {
    title: 'evolve with fashion',
    date: 'November 2023',
    description: 'From Issue #13 to #19, solucky magazine has collaborated with Alina Jafri, a talented writer who has contributed chic articles on fashion trends, runway shows, & style origins from her fashion blog, Evolve With Fashion. She sees fashion as an art form & personal expression, helping others discover their unique style as a dynamic form of individuality.',
    thumbnail: '../Assets/Collabs/collab-10.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497490/COVER_lvuksh.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497489/FIRST_1_itj0hr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497489/1_bxotdg.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497488/2_dm5qde.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497487/3_qmbmtb.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497486/4_se4me3.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497486/5_srnqhf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497485/6_wx2v8y.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497484/7_qr9pfr.jpg",
    ]
  },

    'casino-bleu': {
    title: 'casino bleu',
    date: 'November 2023',
    description: 'We teamed up with Stax Co. for a “Heaven or Hell” rager on 11/03 in Downtown San Jose near San Jose State University. The event featured creative costumes, lively dancing, & refreshing drinks, celebrating one of the year’s most exciting holidays. Stax Co., known for blending music, fashion, & immersive experiences, made this inaugural Halloween celebration an unforgettable night, bringing together a spirited crowd & fostering new connections.',
    thumbnail: '../Assets/Collabs/collab-11.png',
    images:[
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497365/COVER_erotxm.jpg", 
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497264/Sanjana_s_Thumnail_2_fp6ujy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749497263/stax_d9czp3.jpg", 
    ]
  },

    'too-many-thoughts': {
    title: 'too many thoughts',
    date: 'February 2022',
    description: 'Sanjana Solanki, Founder of solucky, joined Mishal Durae on the Too Many Thoughts podcast to explore the essence of solucky as a creative brand. In this engaging episode, Sanjana shared insights on the brand’s origins, creative inspirations, & future goals. Mishal’s in-depth interviewing style made this conversation a must-listen.',
    thumbnail: '../Assets/Collabs/collab-12.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498145/COVER_gbpll9.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498048/LAST__copy_njnkpb.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498049/IMG_5029_qgshky.jpg",
    ]
  },

    'fridays-are-for': {
    title: 'fridays are for...',
    date: 'February 2022',
    description: 'Our Founder, Sanjana Solanki joined Nidhi Gowda on Fridays are For… to share the journey of launching solucky, insights on entrepreneurship, & explored captivating topics. Nidhi, a former NASM Certified Personal Trainer & NYU Economics alum, hosted the episode. Follow the podcast on Instagram for new episodes covering a wide range of topics!',
    thumbnail: '../Assets/Collabs/collab-13.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498241/COVER_fgnbnu.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498242/IMG_1013_mpdcqu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498244/IMG_0987_y5uvgs.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498239/LAST_qpraeq.jpg", 
    ]
  },

    'sweetener': {
    title: 'sweetener',
    date: 'July 2020',
    description: 'In this magazine issue, we displayed a collaboration featuring handmade beaded necklaces that sold out on Etsy. Alie Li & Kadie Qi, brand ambassadors, brought their talent & friendship to the project. Liz Heydon, founder of Sweetener Beads, is a fashion enthusiast who believes accessories are key to transforming any outfit with her trendy, unique creations.',
    thumbnail: '../Assets/Collabs/collab-14.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498568/COVER_xtj1pe.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498411/LAST__19_ty0pi6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498465/LAST__9_dztrnq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498466/IMG_klv0g3.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498467/LAST_20_rid4js.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498470/LAST_18_bpiz8e.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498542/LAST_17_rbafeo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498543/LAST_16_q0yt9q.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498545/LAST_15_ojylpv.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498546/LAST_14_yyuvd5.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498548/LAST_13_et5wj6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498549/LAST_12_de87dm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498552/LAST_11_kotqea.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498553/LAST_10_jyzjmm.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498554/LAST_8_mrse9e.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498557/LAST_7_eiyo6k.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498557/LAST_6_qthn7x.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498559/LAST_5_i4ehb6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498560/LAST_4_lbxovb.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498562/LAST_3_jujum7.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498563/LAST_2_pvwefi.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498565/LAST_1_wlq6qj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498567/IMG_8594_qliv0v.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498571/IMG_6682_rsfios.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498571/IMG_7863_errnms.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498574/IMG_6681_yanfck.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498575/IMG_7860_dg7655.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498576/PenultimateFullSizeRender_veio9c.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498578/IMG_6117_n5mpw5.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498579/IMG_6008_fd2dxj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498581/IMG_6166_dacoh5.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498583/IMG_5895_tppbzp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498585/IMG_6167_ubfr0n.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498587/IMG_6059_vswlo6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498588/IMG_7857_ngklys.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498590/PenultimateFullSizeRender_1_t6epub.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498592/PenultimateFullSizeRender_2_lfytsk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498593/PenultimateFullSizeRender_3_dut4uk.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498594/PenultimateFullSizeRender_4_vjkm6g.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498596/PenultimateFullSizeRender_6_lzsopa.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498599/IMG_2624_farqcv.jpg",  
    ]
  },

    't-and-a': {
    title: 't & a',
    date: 'May 2021',
    description: "A Zoom Hip-Hop dance workshop, with $5 entry tickets, raised $170 for Mrs. Najah's Kitchen by Rebuilding Alliance, beating the $130 goal. Led by Twisha Chawla & Alyssa Villareal - lifelong dancers trained in styles ranging from Bollywood to Ballet - the event highlighted their passion for using art to uplift communities & support meaningful causes.",
    thumbnail: '../Assets/Collabs/collab-15.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499338/COVER_dcnzfn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499338/COVER_dcnzfn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499338/COVER_dcnzfn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499338/COVER_dcnzfn.jpg",
    ]
  },

    'hayeon': {
    title: 'hayeon',
    date: 'March 2024',
    description: 'Our collaboration featured thrifted tees with colorful patchwork designs, all of which sold out due to amazing community support. 10% of proceeds were donated to the Clean Air Task Force. Hayeon Yun blended her passion for sustainability with fashion in this collection, dedicating herself to a climate-conscious lifestyle & supporting small businesses.',
    thumbnail: '../Assets/Collabs/collab-16.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498913/COVER_ehrpbv.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498914/First_vi4wxp.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498916/LAST_1_inhbqs.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498918/IMG_5947_ufnsee.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498920/IMG_5873_ab6jvh.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498922/IMG_5794_rr4wb2.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498924/IMG_5814_dlsvyf.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498925/IMG_5803_wr7bjo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498927/IMG_5775_yoe4ds.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498929/IMG_5732_l5xqmp.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498931/PenultimateFullSizeRender_cfvf4s.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498933/IMG_5808_ddsg4e.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498934/IMG_5743_vgemq5.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749498936/IMG_5765_cfacnx.jpg",
    ]
  },

    'k-and-a': {
    title: 'k & a',
    date: 'January 2021',
    description: 'A Bollywood & Hip-Hop fusion dance workshop raised $183 for the Maitri Organization, exceeding the $130 goal, to support women survivors of domestic violence. Kanchan Raju & Alisha Gupta, both longtime dancers passionate about social change, brought movement and meaning together to uplift a vital cause.',
    thumbnail: '../Assets/Collabs/collab-17.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499461/COVER_lzcguj.jpg", 
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499463/File_001_s3z7hm.jpg",  
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749499466/IMG_2715_z8tye4.jpg",
    ]
  },

    'chrsl': {
    title: 'chrsl',
    date: 'November 2020',
    description: ' From August to November 2020, the brand’s first collaboration featured affordable handmade hair accessories like scrunchies & headscarves. Alisha Gupta, known for her fashion sense & strong online presence, was the perfect ambassador. The entire inventory sold out during Black Friday. Chrisel Pascual, founder of Chrsl crafted each product with love & care.',
    thumbnail: '../Assets/Collabs/collab-18.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458060/2DF143DA-B4AC-45FE-AED9-F7E38358B013_okkoxi.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458059/1EAE68D9-FE9B-4EAB-AC32-32A54C854220-CF7C6AF6-21ED-4259-A421-BDD4156C92C8_j5ygya.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458058/C26302BF-6291-4230-849E-93FB8459F969_pu3ifn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458056/E0AC2112-548C-414D-958D-7EEA4411FE10_odxhpv.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458056/COVER_wzihic.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458056/IMG_3595_pxninn.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458054/LAST_1_klo8hd.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458054/LAST_2_qw3p1s.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458054/LAST_3_lpuz2q.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458053/LAST_7_uvndd7.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458053/LAST_4_wtzvrm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458052/LAST_6_zrxhpt.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458052/LAST_5_wu584v.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458051/LAST_8_vi5hq3.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749489996/IMG_9946_1_ish8ho.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749489996/2DF143DA-B4AC-45FE-AED9-F7E38358B013_h4058m.jpg"
    ]
  },

};

const Collabs = () =>{
    const [openGalleryKey, setOpenGalleryKey] = useState(null);

    return(
        <div className="collabs-page">
            <div className="top-section">
                <div className="content-container-div">
                    <div className="top-content-wrapper">
                        <div className="create-image-container">
                            <img className="svg-bracelet-tablet" alt="bracelet" src="../Assets/Collabs/bracelet-tablet.svg"></img>
                            <img className="svg-image" alt="create-with-solucky" src="../Assets/Collabs/create-image.svg"></img>
                            <img className="svg-bracelet" alt="bracelet" src="../Assets/Collabs/bracelet.svg"></img>
                        </div>
                        <div className="collab-paragraph-container">
                            <div className="collab-para-text">
                                A <b>collaboration</b> with <i>solucky</i> creates a <b>seamless partnership </b>
                                between your business & our creative brand. Simply send us 
                                your products, & our team of experts including models, 
                                production crew, & creative directors will take care of the
                                rest. After the shoot(s), we’ll return your products along
                                with high-quality content that you can freely use across 
                                your social media platforms.
                            </div>
                            <div className="collab-para-text">
                                Additionally, this content will be featured on our social 
                                media channels & website, expanding your reach & boosting 
                                engagement. <b>All that we ask</b> in return is that you credit our 
                                brand & team, along with our collaboration title. If desired, 
                                we’re happy to collaborate on the creative direction, ensuring 
                                <b> a vision both parties love</b>.
                            </div>
                            <div className="collab-para-text">
                               <p className='collab-email-caption'>Email us for a collab :)</p><b className='collab-bold-email'>solucky.contact@gmail.com</b> 
                            </div>
                            <div className="mobile-tag-container">
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-1.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-2.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-3.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-4.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-5.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="view-archive-text-container">
                    <img className="view-archive-svg" src="../Assets/Collabs/view-archive-text.svg"></img>
                </div>
                <div className="horizontal-scroll-section-collab">
                    {Object.entries(collabData).map(([key, { title, thumbnail }]) => (
                        <div className="collab-container" key={key}>
                        <div className="hover-section-collab">
                            <img className="collab-image" src={thumbnail} alt={title} />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGalleryKey(key)}
                            >
                            view
                            </button>
                        </div>
                        <div className="collab-caption">{title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {openGalleryKey && (
                <Gallery
                title={collabData[openGalleryKey].title}
                date={collabData[openGalleryKey].date}
                description={collabData[openGalleryKey].description}
                images={collabData[openGalleryKey].images}
                onClose={() => setOpenGalleryKey(null)}
                />
            )}
        <Footer/>
        </div>
    )
}

export default Collabs
