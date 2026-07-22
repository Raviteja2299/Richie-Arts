import "./Services.css";

function ServiceCard({ image, title, description }) {
    return (
        <div className="service-card">

            <div className="service-image">
                <img src={image} alt={title} />
            </div>

            <div className="service-content">

                <h4>{title}</h4>

                <p>{description}</p>

            </div>

        </div>
    );
}

export default ServiceCard;