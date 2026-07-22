import { useEffect, useState } from "react";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import { getFeaturedArtworks } from "../../services/artworkService";

export default function Gallery() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArtworks();
    }, []);

    async function fetchArtworks() {
        const { data, error } = await getFeaturedArtworks();

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
                            image={art.image}
                            title={art.title}
                            description={art.description}
                            price={art.price}
                        />
                    ))}

                </div>

                <div className="gallery-footer">

                    <button className="btn btn-outline-dark">
                        View All Collection
                    </button>

                </div>

            </div>

        </section>
    );
}