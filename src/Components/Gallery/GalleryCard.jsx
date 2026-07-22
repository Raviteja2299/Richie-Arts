import "./Gallery.css";

export default function GalleryCard({
    image,
    title,
    description,
    price
}) {

    return (

        <div className="gallery-card">

            <img
                src={image}
                alt={title}
            />

            <div className="gallery-overlay">

                <div>

                    <h4>{title}</h4>

                    <p>{description}</p>

                    <span className="gallery-price">
                        ₹ {price}
                    </span>

                </div>

            </div>

        </div>

    );

}