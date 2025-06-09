import React, {useState} from 'react';
import './Collabs.css';
import Footer from './Footer';
import Gallery from './Gallery';

const collabData = {
  'merazine': {
    title: 'merazine',
    date: 'April 2025',
    description: 'We teamed up with fashion platform Merazine for a contest themed “Corporate Siren”: a bold, office-ready look made for the boardroom & the timeline. Users styled avatars with emerging brand pieces leading with the winner scoring a solucky bundle of 15 thrifted items. This collaboration celebrated dressing with purpose & personality.',
    thumbnail: '../Assets/Collabs/collab-19.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458406/IMG_4861_tatxpx.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458404/IMG_4859_dhg3lm.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458403/IMG_4867_mxylpj.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458403/IMG_4869_ihoq0z.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458401/IMG_4874_ywgznf.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458401/IMG_4870_fztqym.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458399/IMG_4876_gsilui.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458398/IMG_4878_zoq0s6.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458397/LAST_fmj0ys.png",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458396/COVER_hpagr6.jpg"
    ]
  },
  'classic-loot': {
    title: 'classic Loot',
    date: 'April 2025',
    description: 'We collaborated with Classic Loot, a Japantown thrift shop curating unique pieces with/from small businesses. They provided standout clothing, paired with solucky wardrobe items, to create bold & office-ready looks. This collaboration celebrated sustainable fashion while celebrating sustainability, local vendors, & fashion with purpose.',
    thumbnail: '../Assets/Collabs/collab-20.png',
    images:[
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
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749458198/COVER_1_alq8rw.jpg",
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
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749459313/COVER_rvjvw7.jpg",
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
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]   
    },

    'mehendi-by-smriti': {
    title: 'mehendi by smriti',
    date: 'October 2024',
    description: ' For Issue #23, we worked alongside Mehendi by Smriti. With 15+ years of experience, Smriti Panchal brought her artistry to this magazine issue & our Diwali After Dark event. Her intricate designs added cultural depth & beauty to every detail, elevating the magazine issue & showcasing the timeless significance of mehendi in an unforgettable way.',
    thumbnail: '../Assets/Collabs/collab-3.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'palam': {
    title: 'palam-colective',
    date: 'October 2024',
    description: 'We were thrilled to collaborate with Palam Collective, founded by Keertana Padmanaban, for our 3-in-1 photoshoot showcasing 1 piece styled in 3 different ways. The brand blends South Indian craftsmanship with sustainable fashion, honoring both tradition & contemporary design. Keertana’s dedication to sustainability & heritage made Palam Collective the perfect fit for the shoot.',
    thumbnail: '../Assets/Collabs/collab-4.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'kaju-studios': {
    title: 'kaju studios',
    date: 'October 2024',
    description: 'In Issue #23, solucky collaborated with Kaju Studios for the Once Upon A Mehendi photoshoot. Founded by Tara & Daivi Patel & inspired by their favorite treat, Kaju Katli, the brand creates versatile jewelry that pairs with both Desi and Western looks, celebrating cultural pride & individuality.',
    thumbnail: '../Assets/Collabs/collab-5.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'holly': {
    title: 'holly',
    date: '',
    description: '',
    thumbnail: '../Assets/Collabs/collab-6.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'pearlescent-x-reya': {
    title: 'pearlescent x reya',
    date: 'November 2023',
    description: 'In this magazine issue, we featured a collaboration with Pearlescent & Reya. Manya Patel’s handmade jewelry & Shreya Patel’s bold art brought a chic, artistic touch to our Gossip Girl-themed issue. Manya’s unique pieces add flair to any outfit, while Shreya’s maximalist art, blending fabric & metal, enriches the issue with vibrant visuals.',
    thumbnail: '../Assets/Collabs/collab-7.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'stax-co-podcast': {
    title: 'stax co. (podcast)',
    date: 'December 2023',
    description: 'Our brand’s journey took center stage in a conversation with Lukas Maciel on the Stax Co. podcast. This interview covered the passion behind our creative pursuits, challenges of running a brand, & exciting future plans. Lukas’s thoughtful interview approach provided a refreshing perspective, valuable insights, & the realities of managing a creative brand.',
    thumbnail: '../Assets/Collabs/collab-8.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },


    'stax-co-event': {
    title: 'stax co. (event)',
    date: 'December 2023',
    description: 'Event with Stax Co',
    thumbnail: '../Assets/Collabs/collab-9.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'evolve-with-fashion': {
    title: 'evolve with fashion',
    date: 'November 2023',
    description: 'From Issue #13 to #19, solucky magazine has collaborated with Alina Jafri, a talented writer who has contributed chic articles on fashion trends, runway shows, & style origins from her fashion blog, Evolve With Fashion. She sees fashion as an art form & personal expression, helping others discover their unique style as a dynamic form of individuality.',
    thumbnail: '../Assets/Collabs/collab-10.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'casinho-bleu': {
    title: 'casino bleu',
    date: 'November 2023',
    description: 'We teamed up with Stax Co. for a “Heaven or Hell” rager on 11/03 in Downtown San Jose near San Jose State University. The event featured creative costumes, lively dancing, & refreshing drinks, celebrating one of the year’s most exciting holidays. Stax Co., known for blending music, fashion, & immersive experiences, made this inaugural Halloween celebration an unforgettable night, bringing together a spirited crowd & fostering new connections.',
    thumbnail: '../Assets/Collabs/collab-11.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'too-many-thoughts': {
    title: 'too many thoughts',
    date: 'February 2022',
    description: 'Sanjana Solanki, Founder of solucky, joined Mishal Durae on the Too Many Thoughts podcast to explore the essence of solucky as a creative brand. In this engaging episode, Sanjana shared insights on the brand’s origins, creative inspirations, & future goals. Mishal’s in-depth interviewing style made this conversation a must-listen.',
    thumbnail: '../Assets/Collabs/collab-12.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'fridays-are-for': {
    title: 'fridays are for...',
    date: 'February 2022',
    description: 'Our Founder, Sanjana Solanki joined Nidhi Gowda on Fridays are For… to share the journey of launching solucky, insights on entrepreneurship, & explored captivating topics. Nidhi, a former NASM Certified Personal Trainer & NYU Economics alum, hosted the episode. Follow the podcast on Instagram for new episodes covering a wide range of topics!',
    thumbnail: '../Assets/Collabs/collab-13.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'sweetener': {
    title: 'sweetener',
    date: 'July 2020',
    description: 'In this magazine issue, we displayed a collaboration featuring handmade beaded necklaces that sold out on Etsy. Alie Li & Kadie Qi, brand ambassadors, brought their talent & friendship to the project. Liz Heydon, founder of Sweetener Beads, is a fashion enthusiast who believes accessories are key to transforming any outfit with her trendy, unique creations.',
    thumbnail: '../Assets/Collabs/collab-14.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    't-and-a': {
    title: 't & a',
    date: 'May 2021',
    description: "A Zoom Hip-Hop dance workshop, with $5 entry tickets, raised $170 for Mrs. Najah's Kitchen by Rebuilding Alliance, beating the $130 goal. Led by Twisha Chawla & Alyssa Villareal - lifelong dancers trained in styles ranging from Bollywood to Ballet - the event highlighted their passion for using art to uplift communities & support meaningful causes.",
    thumbnail: '../Assets/Collabs/collab-15.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'hayeon': {
    title: 'hayeon',
    date: 'March 2024',
    description: 'Our collaboration featured thrifted tees with colorful patchwork designs, all of which sold out due to amazing community support. 10% of proceeds were donated to the Clean Air Task Force. Hayeon Yun blended her passion for sustainability with fashion in this collection, dedicating herself to a climate-conscious lifestyle & supporting small businesses.',
    thumbnail: '../Assets/Collabs/collab-16.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
    ]
  },

    'k-and-a': {
    title: 'k & a',
    date: 'January 2021',
    description: 'A Bollywood & Hip-Hop fusion dance workshop raised $183 for the Maitri Organization, exceeding the $130 goal, to support women survivors of domestic violence. Kanchan Raju & Alisha Gupta, both longtime dancers passionate about social change, brought movement and meaning together to uplift a vital cause.',
    thumbnail: '../Assets/Collabs/collab-17.png',
    images:[
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445791/DSC03385_kerfpu.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445790/DSC03396_vjxqhs.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03458_mdgs6w.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445789/DSC03474_n0r9lo.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445788/DSC03455_rijstq.jpg",
      "https://res.cloudinary.com/dltjxocio/image/upload/v1749445787/DSC03478_ordqhs.jpg",
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
                                Email <b>solucky.contact@gmail.com</b> to collab with us!
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
