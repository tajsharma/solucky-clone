import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import './Team.css'
import Gallery from './Gallery';

const teamBTS_Images = [
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510032/DSC_7888_opcjto.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510032/_DSC0679-Enhanced-NR_wszl0q.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510031/DSC_7550_fhpwry.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510030/IMG_4970_rtwhmw.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510029/DSC_7808_iflgx6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510028/DSC_7542_zh3kin.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510026/DSC_7384_mhs8k1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510026/DSC_7737_alh5ax.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510024/DSC_7602_eq8x3q.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510024/DSC_7907_pupw4v.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510023/DSC_7393_vbcrxt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510023/DSC_7829_hoygyq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510022/DSC_7667_w8aekz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510021/DSC_7724_kvknbp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510020/DSC_7501_h9wesi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510019/BGIV6904_m091ur.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510011/IMG_1956-Enhanced-NR_f7gozb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510010/IMG_9193_jvrtzg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510009/BGIV6946_kc6cp4.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510009/IMG_1963-Enhanced-NR_p14gki.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510008/IMG_0944_sxchsu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510008/IMG_2705-Enhanced-NR_yjurqq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510008/IMG_0942_oo2ru9.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510008/IMG_2424-Enhanced-NR_mgtchw.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510007/IMG_0555_ksyozl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749510007/IMG_2131_itljnp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509998/IMG_0510_c63jqy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509997/IMG_0018_ffkknh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509997/IMG_0476_j2ymu5.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509997/IMG_0015_w4hht8.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509997/SAM_0555_gakxpf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509996/IMG_8109_llte0z.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509996/6C19492C-B2DC-4A07-BC84-28365C65903F_xgjeft.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509996/IMG_6791_bek1ln.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509996/IMG_4940_vbaqra.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509995/IMG_9127_ksg2o8.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509995/IMG_0512_jsvdew.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509988/SAM_0564_qpkibd.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509988/IMG_4930_j72egg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509988/SAM_0563_hilxqh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509987/IMG_8946_fvv2u1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509987/IMG_0991_obmh4q.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509987/IMG_4990_jhmvbm.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509986/IMG_7091_1_jxmnav.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509986/IMG_0480_smtrua.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509979/IMG_8435_ffzfpo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509978/SAM_0581_zmsgmy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509978/IMG_1681_iplgry.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509978/IMG_0466_rz9td4.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509977/IMG_0585_sttozj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509977/IMG_8139_rqtdkv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509977/IMG_0519_xxegot.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509968/IMG_0793_p9jesy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509967/IMG_0548_mcv7pp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509967/IMG_9210_gsc2br.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509967/IMG_8436_boghbd.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509966/IMG_9198_pyxxs9.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509966/IMG_0580_iehsoa.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509966/IMG_9211_y3aioq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509966/IMG_8787_1_zzksue.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509965/IMG_7480_dupoaj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509965/IMG_6838_qc73pl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509965/IMG_0896_pyrejd.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509959/IMG_8943_zcbqt5.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509958/IMG_8941_wb1cov.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509958/0600B996-1803-4F8F-B452-DD28BAFCC452_evhn1c.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509958/IMG_2729_jwq4ce.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509958/IMG_8116_tmnocs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509957/IMG_0941_hgehud.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509957/IMG_0612_fg7slr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509957/IMG_9212_zjbc6g.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509956/IMG_0598_muykzk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509949/IMG_0573_retggh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509949/IMG_9129_oxhvmb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509949/IMG_6031_tam66l.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509948/IMG_8942_tlogcy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509948/IMG_0542_m2plrk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509948/IMG_4845_a6qjrg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509948/IMG_3586_u5pljf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509948/IMG_0484_zbyuae.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509947/IMG_5201_i0olej.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509947/IMG_8928_eo8j9t.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509942/IMG_7460_kv3xly.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509941/IMG_3599_tnjcjs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/IMG_0593_lhuxie.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/476E4E7A-8256-45DD-BF53-C665AC8372BA_w7xuwo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/IMG_0482_z0bgfs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/IMG_0588_ypmxya.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/IMG_3590_poknjo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509939/IMG_7486_zsstdp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509938/081377CE-ED58-42B9-9AE5-5E95EB331ECC_xv4eb3.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509938/DSC02884_cwog0t.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509931/IMG_3865_sadx2g.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509931/IMG_0967_ydbogi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509931/IMG_0779_uybt1z.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509931/IMG_0577_bsx6f5.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509930/IMG_7177_1_jafbh9.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509930/IMG_6623_tgd3o4.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509929/IMG_0671_rpmm40.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509929/IMG_3739_wgom8k.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509929/IMG_0844_yfxskp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509929/IMG_0453_uqn1xs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509929/IMG_0047_sbuphx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509924/IMG_7457_ldycjv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509923/DSC03179_gm71zi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509923/IMG_4875_onruie.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509923/IMG_6375_niusuk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509923/SAM_0651_ozuie2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509922/DSC03213_stxtvb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509922/IMG_8778_1_pjvwzp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509922/IMG_0121_sbtp5u.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509917/IMG_0187_pu85hu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509917/DSC03180_k0y5f7.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509916/DSC03173_ndjiwx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509916/DSC03100_yu9qxx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509916/IMG_8979_1_n2w1to.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509916/IMG_0786_vsczyr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509915/IMG_0357_oru1at.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509915/IMG_8975_1_zsxbhk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509912/IMG_7690_pyaspf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509911/IMG_0055_drbqis.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509911/IMG_0061_hbqa9b.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509911/IMG_0349_sgbwpb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509910/IMG_5681_cur9kt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509910/3X1A6710_prqmxf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509910/IMG_7695_jre9ls.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509907/DSC03065_yqgroy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509906/DSC03188_et0oo2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509906/IMG_4107_emybfj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509906/IMG_0676_t1espl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509905/IMG_0046_ilcpbr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509905/DSC03087_v886vv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509903/DSC03164_vbtvfq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509902/DSC03175_sva0ah.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509901/DSC03039_l9ucj0.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509901/SAM_0601_nqfvmr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509900/C4383A21-D34B-44E3-9505-4D3C4FB54228_qjewqt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509900/DSC03145_auxo7o.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509899/IMG_5691_d6sazx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509898/DSC03183_h6xrrb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509896/DSC03260_hezkn1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509896/DSC02826_jru1rg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509895/IMG_1360_f9stlx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509895/IMG_0348_hyt6tv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509895/IMG_5707_opuqrf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509895/IMG_0028_gfkqnz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509894/IMG_8136_1_dy9ayj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509892/DSC03132_qee5hx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509892/IMG_0526_nhnd9a.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509891/DSC03172_jtlbpc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509890/SAM_0736_jgmszb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509890/DSC03101_nxqzc9.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509890/DSC03130_egpxjn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509886/DSC03252_prs9km.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509885/_DSC0006_xhbrjh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509885/DSC03111_twgkss.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509885/IMG_7183_1_ue2jgu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509885/IMG_5679_ycmh8v.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509884/DSC03054_lp7w7a.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509884/DSC02828_nacihy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509884/IMG_0135_j365rm.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509880/SAM_0678_rjntcu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509880/DSC03182_y2ymkc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509880/SAM_0690_zosr4c.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509879/SAM_0663_iooq5f.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509879/IMG_0049_p8ilqq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509879/IMG_7544_i4g3xf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509866/IMG_8527_md8sw1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509864/DSC03257_sil9qz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509861/IMG_0070_nnxwyl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509861/DSC02936_tvmvqh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509861/IMG_0540_rlk6hx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509860/DSC03063_joek5j.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509860/IMG_0020_ek0afv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509857/IMG_8564_jumhfn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509857/IMG_0632_ujp5r6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509857/DSC03139_hbzkml.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509856/DSC02958_ct5ak3.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509856/SAM_0656_mrrhlv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509856/DSC03151_xngkeg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509852/IMG_4881_ijko38.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509852/IMG_0033_jew5ph.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509852/DSC03102_tcobib.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509851/SAM_1269_myqgly.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509851/DSC03258_kaeh94.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509851/DSC03050_bbs4az.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509851/DSC03057_b5kaek.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509850/IMG_9012_nyifi8.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509847/IMG_1774_drhujk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509847/IMG_0791_xfgckh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509847/SAM_1510_tbsgz4.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509846/SAM_0643_sbmnky.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509846/DSC02899_gsl37k.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509846/SAM_1268_gc3fq3.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509846/IMG_0045_xrqcit.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509843/DSC02890_xnwdy6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509843/DSC02915_d1iqq2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509842/DSC03109_lhqe8e.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509842/SAM_0676_cd7zga.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509842/DSC03108_lnvyvo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509841/DSC03230_vxfnnt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509839/DSC02992_ktplrc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509838/IMG_4860_pz1jps.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509838/DSC03222_cwkueo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509838/SAM_1299_i6ho7y.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509838/DSC03147_ynez6g.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509837/SAM_1506_jgq7pr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509837/SAM_1343_1_jrtal0.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509834/DSC03047_cf11bn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509834/SAM_1261_p7pngr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509833/SAM_0692_mmcswu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509833/IMG_0085_d8eeeg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509833/SAM_1343_ymxjfz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509833/SAM_0977_ljygou.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509832/DSC02945_nvnsx8.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509830/IMG_0470_f8vgu0.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509830/DSC03233_pl6ha6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509830/SAM_0669_quadgv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509829/DSC03201_vnphxy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509829/DSC03083_uohqga.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509829/IMG_6999_pztjok.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509827/DSC02986_wkjctk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509827/IMG_0047_1_oo0j2j.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509827/IMG_0041_jenofw.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509826/SAM_1340_fmtlbc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509826/DSC02966_p7xxvq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509825/SAM_1376_gbcfiv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509823/SAM_0685_f054rc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509823/IMG_8641_1_q4uawn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509822/IMG_7735_1_yhqxsq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509821/DSC02879_jrox2i.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509821/IMG_0014_l5k3pp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509820/IMG_0069_m8jrsi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509819/IMG_0052_jhsdro.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509818/IMG_6996_f01cmj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509818/IMG_0246_wabocf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509817/DSC03084_ghzbzz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509817/IMG_3858_jfdolb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509816/DSC03276_rg4nxn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509816/DSC02976_ywktbo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509815/DSC03035_v0s2rj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509814/DSC03305_vv3neu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509813/SAM_0684_vrlkoo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509813/SAM_1319_xj2xmj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509813/SAM_0733_dsvujo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509812/IMG_0063_wh9otf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509811/DSC03121_alqoi2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509811/SAM_1262_mgrect.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509810/IMG_9859_zymjxx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509810/IMG_0017_iyorq3.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509808/IMG_9858_qyq4iu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509808/DSC03120_dgxjo1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509808/DSC03215_ovb04g.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509807/DSC02863_b57erz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509807/IMG_0184_p9sllj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509806/IMG_4147_pq0dzs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509806/IMG_0163_lkqqwh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509805/SAM_1251_ehhbeb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509805/DSC03093_xrep9i.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509804/SAM_1507_iiytr5.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509804/DSC03079_ciz0gv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509803/SAM_1372_fwdckg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509802/IMG_0059_1_nn0y7i.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509801/IMG_2627_a0pwal.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509801/SAM_1392_udjtjk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509801/SAM_0984_doinhc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509801/IMG_0053_f8pbqc.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509800/IMG_0031_kpw7xo.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509799/IMG_7748_1_f8x1bi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509798/IMG_9922_a9zrdb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509798/IMG_0038_fq99ja.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509798/IMG_0042_zutxzh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509797/IMG_9870_fcjgxe.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509796/DSC03113_ji1fnm.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509796/IMG_9866_or7pn5.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509796/IMG_9864_1_jrriob.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509795/DSC02832_d0yncs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509794/IMG_0002_howzeg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509794/SAM_1329_eykv52.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509793/DSC03077_jycxgs.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509793/IMG_0183_o4pihe.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509793/IMG_0697_gfhygg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509791/SAM_1378_of8mz1.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509791/IMG_1777_g2k3lr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509791/DSC02987_qenefy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509790/SAM_1519_jgqhsh.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509789/SAM_1281_qt2hlf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509789/IMG_0054_oregcq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509788/SAM_1554_skj61i.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509788/SAM_1414_voa4qj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509788/SAM_0738_nwsh8f.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509788/SAM_0666_yoz3o7.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509786/DSC02902_x7nn12.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509786/IMG_9915_tvu2dt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509786/SAM_0671_kjgqv6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509785/DSC02851_ozo7iy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509785/DSC03117_gdvkzv.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509785/DSC03114_ycnaxt.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509785/DSC03298_1_rprchn.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509784/DSC03298_apczyr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509783/DSC03289_vvrkdq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509783/IMG_6733_umzfkj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509782/IMG_5883_hwioza.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509781/SAM_1538_tesiqk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509781/IMG_0045_1_vqckuj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509780/SAM_1530_hpqhre.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509780/IMG_1705_unjjbw.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509779/SAM_1535_s8o9qj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509779/IMG_0050_vbzgfy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509778/IMG_0056_yputi2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509778/IMG_0717_knwetb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509778/DSC02983_wluujl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509777/SAM_1294_nvi3yf.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509777/IMG_0693_vjrmtd.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509777/SAM_1405_qoibp6.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509776/SAM_0752_lfdxav.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509775/SAM_1285_ftsxul.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509775/2CEF807E-E1CE-4F66-8BFA-AEF8A67FEABE_apjwjl.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509775/IMG_9893_tzohsu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509775/SAM_0553_hl7t1i.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509774/IMG_9886_kqtnmy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509773/DSC02858_sv6fvd.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509773/IMG_6735_nm0zag.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509773/DSC02849_evv1mp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509772/DSC03091_tnotyk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509772/IMG_0074_yetzz2.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509771/IMG_0075_c9pldj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509770/IMG_1779_eyhoyp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509770/SAM_1013_secsry.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509769/IMG_9883_aq8qvy.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509769/Screenshot-2025-06-09-at-2.56.26_AM_a0s838.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509769/IMG_9860_etaucr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509769/9E1545EF-832F-4BC4-8FB7-D2BD4D7DAFD8_zpumsz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509768/IMG_4640_peucth.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509768/DSC02854_htcszr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509767/IMG_6033_kpyusq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509767/IMG_4656_f3mcrr.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509767/IMG_4586_ml2rrz.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509766/IMG_4571_qqnwgp.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509766/SAM_0786_g3k7kg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509765/IMG_8752_s6enrb.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509765/IMG_8141_xl9c0r.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509765/IMG_4597_qejz5d.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509765/IMG_0160_ymrpoi.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509764/SAM_1375_ixtllu.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509763/IMG_8763_1_qz19dg.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509763/IMG_8635_fq3uvj.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509763/IMG_6778_phtusk.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/IMG_0173_n7yky3.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/IMG_4635_j7fiwx.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/IMG_3727_oyi3tq.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/7BFEAE56-9003-4151-AD65-161C50E1EC92_aom36k.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/5039D96E-09BB-455E-AA87-261250534EFB_dgg33u.jpg",
    "https://res.cloudinary.com/dltjxocio/image/upload/v1749509762/IMG_3726_lfehsg.jpg",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508994/SAM_1368_cw8cwl.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508992/SAM_1309_cwcya5.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508991/IMG_9238_wip3iu.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508990/IMG_0851_u4gacw.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508990/SAM_1336_aaipft.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508989/IMG_2503_o6lxds.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508988/SAM_1609_tszbbo.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508988/SAM_1324_fxttgy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508987/SAM_1325_kwmxya.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508987/SAM_1365_cm2jjc.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508987/SAM_1321_oxsohh.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508986/MVI_1804_pbofsq.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508985/MAH00381_bxavqk.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508985/IMG_9272_iqeqiq.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508984/IMG_9275_r8zr20.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508983/IMG_9259_ytepfx.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508983/IMG_8533_hixpan.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508982/IMG_6356_wlchap.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508981/IMG_6323_j3mdps.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508981/IMG_3941_obcglm.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508981/IMG_6082_f5dqdt.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508980/IMG_2493_rrdrjf.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508980/IMG_1042_umyam7.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508979/IMG_0831_as4sbs.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508979/IMG_0831_as4sbs.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508977/IMG_0524_a1ucce.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508977/IMG_0361_c5x0cg.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508977/IMG_0362_l4hrhj.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508976/vhs_2025-03-28_194546.966_io7goy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508975/vhs_2025-03-28_194106.324_zafxy6.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508974/vhs_2025-03-28_194032.966_tqzs2u.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508973/SAM_1334_lbcydw.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508973/SAM_1410_urrgvy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508972/SAM_1333_ylo5kg.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508972/SAM_1313_jrngxr.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508971/SAM_1303_igzw0e.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508971/MAH00404_ewx5de.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508969/MVI_1785_vpc3pr.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508968/MAH00385_sjczv1.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508968/IMG_9258_vjwatd.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508968/IMG_9256_cwyvnh.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508881/IMG_9255_pkuzrw.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508832/IMG_9243_eenl0r.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508826/IMG_8758_wiwxi0.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508826/IMG_8532_jfgjub.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508826/IMG_8528_esvgdu.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508826/IMG_8756_dqm5bu.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508825/IMG_8754_npbhyy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508825/IMG_8568_xjgtll.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508822/IMG_7589_r80pam.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508822/IMG_7595_mmn5f3.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508822/IMG_6357_io3kt0.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508821/IMG_6333_moarlv.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508818/IMG_6228_amb0hr.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508818/IMG_5597_x8bifi.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508818/IMG_5618_xzrzjd.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508818/IMG_5590_hjvjxd.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508817/IMG_3942_agi6ms.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508817/IMG_2716_dmqy4f.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508816/IMG_3752_japgyy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508815/IMG_3745_pqcx9m.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508815/IMG_3355_habhl3.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508815/IMG_2718_e9xlkb.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508814/IMG_3358_gjlkmy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508814/IMG_2720_j3o2r7.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508814/IMG_2495_ck81ro.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508811/IMG_1573_ml2ih0.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508813/IMG_0056_snzmuj.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508812/IMG_2331_rexk25.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508811/IMG_1577_odyydf.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508811/IMG_1596_gpooki.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508811/IMG_1573_ml2ih0.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508811/IMG_1395_aybifh.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508810/IMG_1567_xbkq9a.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508810/IMG_1442_phv8je.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508810/IMG_1025_w1ip6j.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508808/IMG_0531_othxsu.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508807/C0032_sjdqws.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508807/IMG_0353_berouw.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508807/831D423A-A358-4A46-BE36-6FF1EAEEA0F6_tc8tmy.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508806/C51E5871-0DDB-41B2-BE77-31D1BA00F2AC_tdnuwu.mp4",
    "https://res.cloudinary.com/dltjxocio/video/upload/v1749508806/IMG_0334_o0xmcy.mp4",
  ];

const Team = () =>{
    const [openGallery, setOpenGallery] = useState(false);

    useEffect(() => {
        // Apply offset only on small screens
        if (window.innerWidth <= 768) {
          const sections = document.querySelectorAll('.team-horizontal-scroll-section');
          sections.forEach(section => {
            section.scrollLeft = 44; // adjust pixels as needed
          });
        }
      }, []);

    const scrollLeft = (sectionClass) => {
        const container = document.querySelector(`.${sectionClass}`);
        container.scrollBy({ left: -300, behavior: 'smooth' });
    };
      
    const scrollRight = (sectionClass) => {
    const container = document.querySelector(`.${sectionClass}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return(
        <div className="team-page">
            <section class="hero-section">
                    <p class="volunteer-text">
                        Our volunteers dedicate their time & efforts to shaping the brand into 
                        what is today, contributing their unique talents & fresh perspectives.
                        In return they build portfolios, refine their skills, & grow professionally
                        while becoming part of a supportive community that celebreates creativity
                        & collaboration. 
                    </p>
                    <img src="../Assets/Team/shoes.png" class="shoe-image" alt="shoe" />

                    <div class="shoe-caption">
                        <img src="../Assets/Team/team-arrow.svg" class="arrow-icon" />
                    </div>

                    <div className="hero-title-container">
                        <h1 class="hero-heading">
                            the
                        </h1>
                        <h1 class="hero-heading">
                            <i>solucky</i>
                        </h1>
                        <h1 class="hero-heading">
                            experience
                        </h1>   
                    </div>
                    
                    <div className="button-container">
                        <p class="caption-text button-caption">a great team starts with the right fit.</p>
                        <div className="buttons-wrapper">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe81g9uPNPingKHngREZ5MpHuUFtI-zXEeOLqVayNIC6Ba2Sg/viewform">
                                <button type="button" className="team-button button1">
                                    <p className="apply-textbox centered-p-bai-jamjuree" id="contributer-text"><i>solucky contributor</i> application</p>
                                    <img className="team-button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                                </button>
                            </a>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZog6msmIUc8K_dc2SsmXIWx7oEGcV4E1PE9WHw0KxKNjEwg/viewform">
                                <button type="button" className="team-button button2">
                                    <p className="apply-textbox centered-p-bai-jamjuree" id="model-text" ><i>solucky model</i> application</p>
                                    <img className="team-button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                                </button>
                            </a>

                            <button type="button" className="team-button button3" onClick={() => setOpenGallery(true)}>
                                <p className="apply-textbox centered-p-bai-jamjuree" id="view-bts-text">view BTS photos</p>
                            </button>
                            {openGallery && (
                                <Gallery
                                title="BTS"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                    </div>
                    

            </section>

            <section className="team-members">
                <div className="main-team-card">         
                    <div className="team-category" id="first-insta-section">
                            <p className="caption-text instagram-caption">
                            *click on any team member's photo to visit their Instagram
                            </p>
                            <h3 className="team-position-title">Brand Operations</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section brand-operations">

                            <a
                                href="https://www.instagram.com/sanjana.solankii?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaSolanki.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SANJANA SOLANKI (she/her) 🦚 
                                                <span className="specific-position">The Founder</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/taj.5harma/"
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/TajSharma.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET TAJ SHARMA (he/him) 🏹
                                                <span className="specific-position">Fullstack Web Developer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/shay.yna?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/ShaynaTrivedi.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SHAYNA TRIVEDI (she/her) 💘 
                                                <span className="specific-position">Product & UX/UI Designer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/amanichowchow?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AmaniChowdhury.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET AMANI CHOWDHURY (she/her) 🐬
                                                <span className="specific-position">Brand Advisor</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>


                                <a
                                href="https://www.instagram.com/ananyadutta05?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnanyaDutta.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANANYA DUTTA (she/her) ❣️
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET HENRY PHAM (he/him) 🩵
                                                <span className="specific-position">Financial Advisor</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/nate.yishak?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/NatnaielYishak.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET NATNAIEL YISHAK (he/him) 🕶️
                                                <span className="specific-position">Brand Outreach</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/anujaapandit?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnujaPandit.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANJUA PANDIT (she/her) 👡
                                                <span className="specific-position">Brand Outreach</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>
                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Production</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('production')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('production')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section production">
                            
                            <a
                            href="https://www.instagram.com/amruthagururaj?igsh=NTc4MTIwNjQ2YQ=="
                            className="post-div"
                            target="_blank"
                            rel="noopener noreferrer"
                                > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AmruthaGururaja.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AMRUTHA GURURAJA (she/her) 🦚
                                            <span className="specific-position">Videographer + Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                            href="https://www.instagram.com/f3julian?igsh=NTc4MTIwNjQ2YQ=="
                            className="post-div"
                            target="_blank"
                            rel="noopener noreferrer"
                            > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JulianCaballero.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JULIAN CABALLERO (he/him) 🌿
                                            <span className="specific-position">Photographer + Videographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/arpithasun?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ArpithaSundarajan.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ARPITHA SUNDARAJAN (she/her) 🌹
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/salvat13rra?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RocioSalvatierra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ROCIO SALVATIERRA (they/them) ☀️
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/vaibhavi.i?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/VaibhaviJhawar.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET VAIBHAVI JHAWAR (she/her) 🪷
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>


                            <a
                                href="https://www.instagram.com/olivia_kinoshita?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/OliviaKinoshita.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET OLIVIA KINOSHITA (she/her) 🌱
                                            <span className="specific-position">Videographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/jahnavimanchenella?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JJManchenella.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JJ MANCHENELLA (she/her) 🍃
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/veda.gott?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/VedaGott.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET VEDA GOTT (she/her) 👓
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/saajaysingh?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SaajaySingh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAAJAY SINGH (he/him) 🕷️
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>


                            <a
                                href="https://www.instagram.com/radhikabhavsarr?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RadhikaBhavasr.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET RADHIKA BHAVASR (she/her) 💋
                                            <span className="specific-position">Photoshoot Assistant</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/babangahunia?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/BabanGahunia.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET BABAN GAHUNIA (she/her) 🍓
                                            <span className="specific-position">Photoshoot Assistant</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/haz_oor?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Photo Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position">Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="team-category" id="social-media-category">
                        <h3 className="team-position-title">Social media</h3>
                        <div className="team-horizontal-scroll-section no-scroll">

                            <a
                                href="https://www.instagram.com/radhikabhavsarr?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RadhikaBhavasr.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET RADHIKA BHAVASR (she/her) 💋
                                            <span className="specific-position">Social Media Strategist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/sana.kamboh?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanaKamboh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANA KAMBOH (she/her) 🌸
                                            <span className="specific-position">Pinterest Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/mikaila.bramlette?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position">Spotify Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-position-title">Magazine Publishing</h3>
                        <div className="scroll-buttons">
                            <button className="scroll-left" onClick={() => scrollLeft('magazine-publishing')}>
                                <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                            </button>
                            <button className="scroll-right" onClick={() => scrollRight('magazine-publishing')}>
                                <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                            </button>
                        </div>
                        <div className="team-horizontal-scroll-section magazine-publishing">

                             <a
                                href="https://www.instagram.com/aarruushi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴 
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/haz_oor?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/mikaila.bramlette?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position"><i> Small Business Spotlight + Spotify Playlist </i>Columinst</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>


                            <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position"><i>For The Community</i> Columnist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/inikamehra?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/InikaMehra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET INIKA MEHRA (she/her) 🎀
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/sraav.a?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SraavyaApuri.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SRAAVYA APURI (she/her) ♠️
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/safabasravi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SafaBasravi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAFA BASRAVI (she/her) 🧸
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Aesthetic Photographers</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section aesthetic-photographers">

                            <a
                                href="https://www.instagram.com/ssanjanaah?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaDadi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANJANA DADI (she/her) 🦋
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/natalie.getz?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NatalieGetz.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NATALIE GETZ (she/her) 🪷 
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/heenabainss?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HeenaBains.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HEENA BAINS (she/her) 🥂
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/aarruushi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/niya.maudgalya?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NiyaMaudgalya.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NIYA MAUDGALYA (she/her) 🌞
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/chinmayiiii_b?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ChinmayiBolisetty.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET CHINMAYI BOLISETTY (she/her) 🌃
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>
                    
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Team