import React from "react";
import './home.css';
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import CardTestimoni from "../../Component/CardTestimoni/cardTestimoni";

export default function Home() {

    useEffect(function () {
        document.title = 'Home';
    }, []);

    return (
        <div>

            {/* // awal hero */}
            <div className="hero">
                <h1 className="header_hero">Selamat Datang</h1>
                <h2 className="header_text">Di Website Aku</h2>
                <div>
                    <div className="button_hero">About Me</div>
                </div>
            </div>
            {/* // akhir hero */}
    
            {/* // awal detail */}
            <div className="detail">
    
                {/* awal jumlah project */}
                <div className="detail_project">
                    <p className="angka_detail">213</p>
                    <p className="text_detail">Project</p>
                </div>
                {/* ahkir jumlah project */}
    
                {/* awal jumlah testimoni */}
                <div className="detail_testimoni">
                    <p className="angka_detail">11</p>
                    <p className="text_detail">Testimoni</p>
                </div>
                {/* ahkir jumlah testimoni */}
    
            </div>
            {/* akhir detail */}

            {/* awal testimoni */}
            <div className="Testimoni">

                {/* header */}
                <h3 className="header_testomini">Testimoni</h3>

                {/* awal card */}
                <div className="card_container">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    // loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    810: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardTestimoni />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimoni />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimoni />
                    </SwiperSlide>

                </Swiper>

                </div>

            </div>
            
        </div>

    )
}