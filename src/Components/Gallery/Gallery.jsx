import { useEffect, useState } from "react";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";

import { Link } from "react-router-dom";
import {
    getFeaturedArtworks,
    getAllArtworks,
} from "../../Services/artworkService";


export default function Gallery({
    featured = true,
    showViewAll = true,
}) {

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArtworks();
    }, []);

    async function fetchArtworks() {

        const { data, error } = featured
            ? await getFeaturedArtworks()
            : await getAllArtworks();

        if (error) {
            console.error(error);
        } else {            
            setArtworks(data);
        }

        setLoading(false);
    }

    if (loading) {
        return (
            <section className="gallery">
                <div className="container">
                    <h3 className="text-center">Loading...</h3>
                </div>
            </section>
        );
    }

    return (
        <section className="gallery">

            <div className="container">

                <div className="gallery-header">

                    <span className="gallery-subtitle">
                        OUR COLLECTION
                    </span>

                    <h2 className="gallery-title">
                        Featured Creations
                    </h2>

                    <p className="gallery-description">
                        Every handcrafted piece is uniquely designed with creativity and love.
                    </p>

                </div>

                <div className="gallery-grid">

                    {artworks.map((art) => (
                        <GalleryCard
                            key={art.id}
                            artwork={art}
                        />
                    ))}

                </div>

                {showViewAll && (
                <div className="gallery-footer">
                    <Link to="/gallery" className="btn btn-outline-dark">
                        View All Collection
                    </Link>
                </div>
            )}

            </div>

        </section>
    );
}