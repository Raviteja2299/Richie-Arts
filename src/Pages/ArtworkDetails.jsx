import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtwork } from "../Services/artworkService";

import "./styles/ArtworkDetails.css"

export default function ArtworkDetails(){

    const { id } = useParams();

    const [artwork,setArtwork] = useState(null);

    useEffect(()=>{
        fetchArtwork();
    },[]);

    async function fetchArtwork(){

        const {data,error}=await getArtwork(id);

        if(error){

            console.error(error);

        }else{

            setArtwork(data);

        }

    }
    if(!artwork){

    return <h2>Loading...</h2>;

}

        return(

            <section className="artwork-details">

                    <div className="container">

                        <div className="details-grid">

                            <div className="details-image">
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                />
                            </div>

                            <div className="details-content">

                                <span className="details-category">
                                    {artwork.category}
                                </span>

                                <h1 className="details-title">
                                    {artwork.title}
                                </h1>

                                <h2 className="details-price">
                                    ₹ {artwork.price}
                                </h2>

                                <p className="details-description">
                                    {artwork.description}
                                </p>

                                <div className="details-actions">

                                    <a
                                        href={`https://wa.me/916281879688?text=Hi! I'm interested in ${artwork.title}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-btn"
                                    >
                                        Order on WhatsApp
                                    </a>

                                    <Link
                                        to="/gallery"
                                        className="back-btn"
                                    >
                                        ← Back to Gallery
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

    );

}