import React from "react";
import './cardProject.css';
import Foto from '../../Assets/photo/edward-cisneros-_H6wpor9mjs-unsplash.jpg';

export default function CardProject()
{
    return (
        <div className="card">
            <div className="card_photo">
                <img src={Foto} alt="photo_card" />
            </div>
            <div className="card_detail">
                <h3 className="nama_detail">Nama Card</h3>

                <button className="btn_detail">
                    Details
                </button>
            </div>
        </div>
    )
}