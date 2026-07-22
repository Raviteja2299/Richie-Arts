import "./hero.css";
import heroImage from "/src/assets/Images/hero.jpg";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">

                <div className="row align-items-center">

                    {/* Left Content */}

                    <div className="col-lg-6">

                        <div className="hero-content">

                            <span className="hero-subtitle">
                                Handmade With Love
                            </span>

                            <h1 className="hero-title">
                                Beautiful <span>Resin Art</span> Crafted Just For You
                            </h1>

                            <p className="hero-description">
                                Discover handcrafted resin creations including
                                coasters, trays, clocks, home décor and
                                personalized gifts made with love.
                            </p>

                            <div className="hero-buttons">

                                <a href="#gallery" className="hero-btn-primary">
                                    View Gallery
                                </a>

                                <a href="#contact" className="hero-btn-outline">
                                    Contact Us
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Right Image */}

                    <div className="col-lg-6">

                        <div className="hero-image">

                            <img
                                src={heroImage}
                                alt="Richie Arts"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;