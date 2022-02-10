import React from "react";
import './about.css';
import { useEffect } from "react";
import FotoImg from '../../Assets/photo/my-profile.JPG';


export default function About() {

    useEffect(function () {
        document.title = 'About';
    }, []);

    return (
        
        // <!-- awal background about -->
        <div className="background_aboutme">
            <h3 className="judul_about">About Me</h3>

            {/* <!-- awal detail about --> */}
            <div className="detail_about">

                {/* <!-- awal image profile --> */}
                <div className="image_profile">
                    <img src={FotoImg} alt="image_profile" />
                </div>
                {/* <!-- akhir image profile --> */}

                {/* <!-- awal text about --> */}
                <div className="text_about">

                    {/* <!-- awal text about name --> */}
                    <div className="text_about_name">
                        <p className="name">Nur Pujiyanto</p>
                        <p className="profesi">Junior Web Programmer</p>
                    </div>
                    {/* <!-- akhir text about name --> */}
                    
                    {/* <!-- awal text about paragraf --> */}
                    <div className="text_about_paragraf">

                        {/* <!-- awal paragraf --> */}
                        <div className="paragraf">Memiliki Kemampuan Tentang Pemograman Web Selama 1 tahun. <br />
                        Teknologi Pengembangan Web dengan Konsep RestFull API, React Js (FrondEnd), Laravel (BackEnd) dan Bootstrap (Css Framework).</div>

                        <div className="paragraf">Saya sangat bersemangat terhadap pengkodean dibidang pengembangan web termasuk membangun Aplikasi & Teknologi Web terkini.  
                        </div>

                        <div className="paragraf">Saat ini meklakukan mengembangkan keterampilan saya dan meningkatkan kualitas kode, sehingga saya dapat menjamin kualitas pekerjaan.</div>
                        {/* <!-- akhir paragraf --> */}

                    </div>
                    {/* <!-- akhir text about paragraf --> */}

                </div>
                {/* <!-- akhir text about --> */}

            </div>
            {/* <!-- akhir detail about --> */}

        </div>
        // {/* <!-- akhir background about --> */}

    )
}