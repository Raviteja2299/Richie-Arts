import "./Footer.css";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    {/* Logo */}

                    <h2 className="footer-logo">
                        Richie Arts
                    </h2>

                    <p className="footer-tagline">
                        Handmade resin creations crafted with creativity,
                        elegance, and love.
                    </p>

                    {/* Navigation */}

                    <ul className="footer-links">

                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>

                        <li>
                            <a href="#services">Services</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                    </ul>

                    {/* Social */}

                    <div className="footer-social">

                        <a
                            href="https://instagram.com/your_username"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://facebook.com/your_page"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Richie Arts. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;