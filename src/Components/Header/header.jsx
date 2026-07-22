import "./header.css";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand logo fw-bold fs-3" href="/">
                        Richie <span>Arts</span>
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation */}
                    <div className="collapse navbar-collapse" id="navbar">

                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">
                                    Gallery
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
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