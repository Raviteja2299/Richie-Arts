import Hero from "../Components/Hero/hero";
import Gallery from "../Components/Gallery/Gallery";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";


export default function Home() {
    return (
        <>
            <Hero />
         

            <Gallery
                featured={true}
                showViewAll={true}
            />
            <Services />
            <Contact />
        </>
    );
}