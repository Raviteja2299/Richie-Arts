import "./Contact.css";

function Contact() {
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
                            <i className="bi bi-telephone-fill"></i>
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="info-item">
                            <i className="bi bi-envelope-fill"></i>
                            <span>hello@richiearts.com</span>
                        </div>

                        <div className="info-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            <span>Bengaluru, Karnataka</span>
                        </div>

                        <div className="info-item">
                            <i className="bi bi-clock-fill"></i>
                            <span>Mon - Sat | 10 AM - 7 PM</span>
                        </div>

                        <div className="social-icons">

                            <a href="#">
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a href="#">
                                <i className="bi bi-whatsapp"></i>
                            </a>

                        </div>

                    </div>

                    {/* Right Side */}

                    <form className="contact-form">

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="form-control"
                                />
                            </div>

                        </div>

                        <div className="mb-4">

                            <textarea
                                rows="6"
                                className="form-control"
                                placeholder="Tell us about your custom order..."
                            ></textarea>

                        </div>

                        <button
                            type="submit"
                            className="contact-btn"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;