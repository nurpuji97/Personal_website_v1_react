import React from "react";
import CardProject from "../../Component/CardProject/cardProject";
import './Project.css';

export default function Project(){
    return (

        // <!-- awal container project -->
        <div className="container_project">
            <h1 className="judul_project">Project</h1>

            {/* <!-- card --> */}
            <div className="container_card">
                <CardProject />
                <CardProject />
                <CardProject />


            </div>

        </div>
    )
}