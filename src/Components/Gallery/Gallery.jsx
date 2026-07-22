import "./Gallery.css";
import GalleryCard from "./GalleryCard";

const gallery = [

    {
        title:"Ocean Coasters",
        image:"https://placehold.co/800x900",
        large:true
    },

    {
        title:"Serving Tray",
        image:"https://placehold.co/600x600",
    },

    {
        title:"Resin Clock",
        image:"https://placehold.co/800x900",
        large:true
    },

    {
        title:"Wall Art",
        image:"https://placehold.co/600x600",
    },

    {
        title:"Custom Name Plate",
        image:"https://placehold.co/800x900",
        large:true
    },

    {
        title:"Wedding Gift",
        image:"https://placehold.co/600x600",
    }

];

function Gallery(){

    return(

<section className="gallery-section" id="gallery">

<div className="container">

<div className="text-center mb-5">

<h6 className="section-subtitle">
OUR COLLECTION
</h6>

<h2 className="section-title">
Featured Creations
</h2>

<p className="section-description">
Every handcrafted piece is uniquely designed with
creativity and love.
</p>

</div>

<div className="gallery-grid">

{
gallery.map((item,index)=>

<GalleryCard

key={index}

title={item.title}

image={item.image}

large={item.large}

/>

)
}

</div>

<div className="text-center mt-5">

<a href="#" className="hero-btn-primary">

View Complete Gallery

</a>

</div>

</div>

</section>

    )

}

export default Gallery;