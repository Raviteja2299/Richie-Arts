import "./Contact.css";
import { useState } from "react";
import { createMessage } from "../../Services/messageService";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInstagram,
    FaClock,
    FaWhatsapp
} from "react-icons/fa";

function Contact() {

        const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};


const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const { error } = await createMessage(formData);

    if (error) {
        setError("Failed to send your message. Please try again.");
    } else {

        setSuccess(
            "Thank you! Your message has been sent successfully."
        );

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    }

    setLoading(false);
};
    return (
        <section className="contact-section" id="contact">

            <div className="container">

                <div className="text-center mb-5">

                    <h6 className="section-subtitle">
                        GET IN TOUCH
                    </h6>

                    <h2 className="section-title">
                        Let's Create Something Beautiful
                    </h2>

                    <p className="section-description">
                        We'd love to hear your ideas and help create a unique resin
                        masterpiece just for you.
                    </p>

                </div>

                <div className="contact-wrapper">

                    {/* Left Side */}

                    <div className="contact-info">

                        <h3>Contact Information</h3>

                        <p>
                            Reach out anytime. We're happy to answer your
                            questions and discuss custom orders.
                        </p>

                        <div className="info-item">
                            <FaWhatsapp className="info-icon" />
                            <span>+91 6281879688</span>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <span>richiearts23@gmail.com</span>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <span>Bengaluru, Karnataka</span>
                        </div>

                        <div className="info-item">
                            <FaInstagram className="info-icon" />
                            <span>
                                <a
                                    href="https://www.instagram.com/richie_arts_23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    title="Instagram"
                                >
                                    @richie_arts_23
                                </a>
                            </span>
                        </div>

                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <span>Mon – Sat | 10 AM – 7 PM</span>
                        </div>

                    </div>

                    {/* Right Side */}

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="form-control"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="mb-4">

                            <textarea
                                rows="6"
                                name="message"
                                className="form-control"
                                placeholder="Tell us about your custom order..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {success && (
                            <div className="alert alert-success">
                                {success}
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="contact-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;