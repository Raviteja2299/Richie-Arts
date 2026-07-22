import "./Services.css";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Custom Resin Art",
        description: "Personalized resin creations crafted exclusively for your style and ideas.",
        image: "https://placehold.co/600x500"
    },
    {
        title: "Wedding Gifts",
        description: "Unique keepsakes for weddings, anniversaries, and memorable celebrations.",
        image: "https://placehold.co/600x500"
    },
    {
        title: "Home Décor",
        description: "Elegant resin décor pieces that add beauty to every space.",
        image: "https://placehold.co/600x500"
    },
    {
        title: "Corporate Gifts",
        description: "Premium handcrafted gifts for businesses, clients, and special events.",
        image: "https://placehold.co/600x500"
    }
];

function Services() {
    return (
        <section className="services-section" id="services">

            <div className="container">

                <div className="text-center mb-5">

                    <h6 className="section-subtitle">
                        WHAT WE OFFER
                    </h6>

                    <h2 className="section-title">
                        Our Services
                    </h2>

                    <p className="section-description">
                        We create handcrafted resin products tailored to your ideas,
                        making every piece one of a kind.
                    </p>

                </div>

                <div className="services-grid">

                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services;