import "./Gallery.css";
import { Link } from "react-router-dom";

export default function GalleryCard({ artwork }) {

    const {
        id,
        image,
        title,
        category,
        description,
        price
    } = artwork;

    return (
        <div className="gallery-card">

            <div className="gallery-image">
                <img
                    src={image}
                    alt={title}
                />
            </div>

            <div className="gallery-content">

                <h4 className="gallery-card-title">
                    {title}
                </h4>

                <span className="gallery-category">
                    {category}
                </span>

                <p className="gallery-card-description">
                    {description}
                </p>

                <div className="gallery-card-footer">

                    <span className="gallery-price">
                        ₹ {price}
                    </span>

                    <Link
                        to={`/gallery/${id}`}
                        className="view-btn"
                    >
                        View →
                    </Link>

                </div>

            </div>

        </div>
    );
}