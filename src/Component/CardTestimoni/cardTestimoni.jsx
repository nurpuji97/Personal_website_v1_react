import React from "react";
import './cardTestimoni.css';
import Foto from '../../Assets/photo/ben-parker-OhKElOkQ3RE-unsplash.jpg';

export default function Card_testimoni(props) {
    return (
        
        // <!-- card -->
        <div className="swiper-slide card_content">
            <div className="profile-card">
                <div className="image_profile-card">
                    <img src={Foto} alt="profile card" />
                </div>
                <div className="title_profile-card">
                    <span className="nama_profile">Nama</span>
                    <span className="profesi">Profesi</span>
                </div>
            </div>
            <div className="body-card">
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dicta iste officiis, accusantium voluptas odit reiciendis recusandae ex architecto eos, quam eum est ab adipisci hic autem quia? Quis, reiciendis?"</p>
            </div>
        </div>

    )
}