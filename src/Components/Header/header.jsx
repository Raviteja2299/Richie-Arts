import { useEffect, useState } from "react";
import "./header.css";

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scrolled ? "header scrolled" : "header"}>

            <nav className="navbar navbar-expand-lg">

                <div className="container">

                    <a className="navbar-brand logo fw-bold fs-3" href="/">
                        Richie <span>Arts</span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">

                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="gallery">Gallery</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>

                        <a href="#contact" className="order-btn">
                            Order Now
                        </a>

                    </div>

                </div>

            </nav>

        </header>

    );
}

export default Header;