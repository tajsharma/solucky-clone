import React, { useState, useMemo } from 'react';
import Footer from './Footer';
import Gallery from './Gallery';
import './About.css';

const aboutImages = [
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328479/IMG_3892_td9xke.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328478/IMG_4022_jd4yit.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328478/IMG_4221_odpnm6.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328477/IMG_4453_om4a7f.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328476/IMG_4501_b68t5c.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328476/IMG_4559_r25b22.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328475/IMG_4893_z8wcl9.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328475/IMG_5183_1_nfu5du.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328474/IMG_5184_1_brypi3.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328473/52CA1BCB-5476-4B73-9F9F-2E7BB550457F_qshha5.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328472/AB79D439-5EB5-4500-8717-08B67939EC0A_o4a5n2.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328472/IMG_5252_1_i0xc6z.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328471/EC23EA8B-EEFE-49AD-AA5F-2A7E9C51D133_h31ron.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328470/IMG_5790_s5n7wc.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328469/IMG_5802_a9r6is.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328468/IMG_5980_jdllho.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328468/IMG_5992_bbxdmt.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328467/738B9DA1-91F3-4BB1-9E5A-46D664A5D075_ibgata.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328466/5A9CF507-DB67-4782-9C10-8215266B079A_uxw9cf.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328466/B590B4ED-7B88-4194-8B90-49F5B8C13852_m3etiy.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328465/A678589E-1061-4C34-87F7-527EBA4F7E78_brz6k2.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328464/IMG_8226_2_ycceu4.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328463/BF8F1DFD-1DC4-4752-ABA7-901CD4F2E396_ewnpsm.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328462/IMG_8992_2_w1azj4.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328462/BFB9FA6A-DE88-4E19-B688-EDA9CF4B0056_ruqffv.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328462/IMG_9106_2_wsswhm.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328461/IMG_9172_2_tguila.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328460/IMG_9204_2_uyug9q.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328383/18BA4B90-985D-4CB3-8A74-736F0885E4FC_ckdzm0.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328383/32508664-C23B-4E71-BD23-7158EC3C4DE6_igk2mm.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328382/15F890B5-7698-4769-982B-CCFF5C6F16FD_hwso44.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328381/B8775FC5-59F6-4CFD-B477-873767905C94_rqascr.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328381/IMG_9477_2_zn8isr.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328380/IMG_9492_2_ogkauz.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328380/IMG_9548_2_naqhra.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328379/IMG_9563_2_lc0dek.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328378/3C972620-1CB4-4749-8A06-8DE4EF62DF40_obau1x.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328378/IMG_9678_2_r8w0eb.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328377/IMG_9697_2_xjjzns.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328377/IMG_9731_2_rcfs2i.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328376/IMG_9750_2_kci07h.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328375/IMG_9843_2_xzypqz.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328375/IMG_9945_2_qkdnzk.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328374/IMG_0001_2_tq5ugm.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328374/IMG_0123_2_khgxgd.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328373/IMG_0189_vqxilx.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328373/IMG_0347_msts8a.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328372/IMG_0350_lbzpbw.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328372/IMG_0358_tbome7.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328371/IMG_0410_aozaj2.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328371/IMG_0412_oc8hsp.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328370/IMG_0423_qpiyyp.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328369/IMG_0682_2_rmkntl.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328369/IMG_0695_2_tsoudg.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328368/IMG_0699_3_tfym3m.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328367/IMG_1003_2_fru9rz.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328366/IMG_1023_2_iywsya.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328366/IMG_1009_2_y8u3zr.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328365/IMG_1085_2_o7vexg.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328364/IMG_1131_2_yxkqhw.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328364/IMG_1145_2_n7rxfx.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328363/IMG_1209_2_ttzlxb.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328363/DSC01377_w3ty6f.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328362/DSC01385_spm2cg.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328362/IMG_1229_2_w1i4vu.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328361/F8AEB8E9-A97C-4E47-AE9A-7DC23FAD6512_g3bpbp.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328361/IMG_1314_2_xdqpil.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328361/BADA46C1-86D4-498B-9EC3-C83B5F23B19C_mljxq4.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328361/34212021-B6AA-4F14-9BB0-5EF42EAC1958_iqe6iz.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328360/9DDDF3E4-3DCA-4A3F-A022-025668BBB57C_zlktwt.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328360/76BD036F-96BE-4EA3-ACA6-2CCCC9A513EE_u2l6wt.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328359/D615CC99-8B4D-46A2-9F8C-FD0F80A54497_bym5hk.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328359/CD56E0F8-B185-480B-AC6F-2F69511AD1EA_wpsxj6.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328358/IMG_9304_eea9j7.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328358/IMG_8767_krsqic.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328358/IMG_1206_tkdnqg.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328358/B6F1C942-44B0-4AAE-BE2A-24915776C3C2_w2epvw.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328357/IMG_4868_teuvmq.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328357/SAM_1644_n65ngf.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328356/DSC05655_g6ivey.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328356/SAM_1574_bryeql.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328356/SAM_1643_gr8wf7.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328356/SAM_1643_gr8wf7.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328356/100_1115_gmgnwz.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328354/SAM_1645_nikc8a.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328354/DSC05639_sli6t3.jpg",
  "https://res.cloudinary.com/dltjxocio/image/upload/v1749328346/1DCA8C73-7135-4852-B452-BBC47F22C102_kaw6nt.jpg",
  "https://res.cloudinary.com/dltjxocio/video/upload/v1749499694/SAM_1601_uyjysi.mp4",
  "https://res.cloudinary.com/dltjxocio/video/upload/v1749499697/SAM_1595_qmosn4.mp4",
  "https://res.cloudinary.com/dltjxocio/video/upload/v1749499699/SAM_1603_avu35a.mp4",
  "https://res.cloudinary.com/dltjxocio/video/upload/v1749499702/SAM_1580_vbofmo.mp4"
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const About = () => {
  const [openGallery, setOpenGallery] = useState(false);

  const randomizedImages = useMemo(() => shuffleArray(aboutImages), []);

  return (
    <>
    <div className="about-page">
      <div className='about-section-wrapper'>
        <div className='founder-section'>
          <div className='message-container' id='founder-message'>
                <h1 className='text-pt-serif'>From the Founder</h1>
                <p className='paragraph-message'>
                Sanjana Solanki, a Bay Area native & 2024 Business Administration
                graduate from San Jose State University, created <i>solucky</i> as a creative
                outlet. Her passions for fashion, film, organization, decoration, & 
                makeup, along with her South Asian heritage, consistently shape the 
                brand’s unique vision. Hobbies like thrifting, decorating, & photography 
                inspired her to create <i>solucky</i>, allowing her to showcase these interests
                & collaborate with some of the most dedicated & hardworking people she
                has ever met.
                </p>
          </div>
        </div>

        <div className='brand-section'>
          <div className='message-container' id='brand-message'>
                <h1 className='text-pt-serif'>The Brand</h1>
                <p className='paragraph-message'>
                Founded by Sanjana in August 2020, the brand draws its name from a cherished 
                childhood memory. Inspired by her father's endearing reference to their family
                as "so-lucky," the name "<i>solucky</i>" was chosen to reflect a personal connection
                & resonate as a catchy, memorable brand identity.
                </p>
          </div> 
        </div>

        <div className='camera-section'>
          <div className='camera-container'>
          <button className="camera-button" onClick={() => setOpenGallery(true)}>
            <img src="../Assets/About/camera-image.png" alt="open gallery" className='camera-picture'/>
          </button>
            {openGallery && (
              <Gallery
                title="Family & Friends"
                date="last updated may 2025"
                images={randomizedImages}
                onClose={() => setOpenGallery(false)}
              />
            )}
            <img src='../Assets/About/camera-caption.svg' alt='click to interact ->' className='camera-caption'></img>
          </div>
        </div>

        <div className='story-section'>
          <div className='message-container' id='story-message'>
                <h1 className='text-pt-serif'>Our Story</h1>
                <p className='paragraph-message'>
                Initially envisioned as a blog to share the Founder’s creative passions with
                loved ones, <i>solucky</i> took an unexpected turn just before its launch. Collaborating
                with close friends to offer limited-time items, the brand swiftly transformed into
                the multi-dimensional creative force it is today.
                </p>
          </div>
        </div>
        <div className='signoff-message'>
            <p>- Founder of solucky, Sanjana Solanki</p>
          </div> 
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
