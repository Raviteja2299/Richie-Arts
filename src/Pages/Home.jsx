import Header from "../Components/Header/header";
import Hero from "../Components/Hero/hero";
import Gallery from "../Components/Gallery/Gallery";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import FloatingContact from "../Components/FloatingContact/FloatingContact";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Gallery />
            <Services />
            <Contact />
            <Footer />
            <FloatingContact />
        </>
    );
}