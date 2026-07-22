import "./Footer.css";

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