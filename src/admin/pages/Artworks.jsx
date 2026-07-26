import { useEffect, useState } from "react";

import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

import "../styles/admin.css";

import ArtworkModal from "../components/ArtworkModal";

import {
    getAllArtworks,
    createArtwork,
    updateArtwork,
    deleteArtwork,
} from "../../Services/artworkService";

import {
    uploadArtworkImage,
    deleteArtworkImage,
} from "../../Services/storageService";




export default function Artworks() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    function handleAddArtwork() {
        setSelectedArtwork(null);
        setShowModal(true);
    }

    function handleEditArtwork(artwork) {
        setSelectedArtwork(artwork);
        setShowModal(true);
    }

    function handleCloseModal() {
    setShowModal(false);
    setSelectedArtwork(null);
}

// Delete Art 

async function handleDeleteArtwork(artwork) {

    const confirmed = window.confirm(
        `Delete "${artwork.title}"?`
    );

    if (!confirmed) return;

    try {

        // Delete image from storage
        await deleteArtworkImage(artwork.image);

        // Delete database record
        const { error } = await deleteArtwork(artwork.id);

        if (error) {
            alert(error.message);
            return;
        }

        await loadArtworks();

    } catch (err) {
        console.error(err);
        alert("Failed to delete artwork.");
    }
}

    useEffect(() => {
        loadArtworks();
    }, []);

    async function loadArtworks() {
        const { data, error } = await getAllArtworks();

        if (error) {
            
            console.error(error);
        } else {
            setArtworks(data);
        }

        setLoading(false);
    }

    async function handleSaveArtwork(form) {

    try {

        // EDIT ARTWORK
      
        if (selectedArtwork) {

            let imageUrl = selectedArtwork.image;

            // Upload new image only if selected
            if (form.image) {

                const upload = await uploadArtworkImage(form.image);

                if (upload.error) {
                    alert(upload.error.message);
                    return;
                }

                imageUrl = upload.publicUrl;
            }

            const { error } = await updateArtwork(
                selectedArtwork.id,
                {
                    title: form.title,
                    category: form.category,
                    price: form.price,
                    description: form.description,
                    featured: form.featured,
                    image: imageUrl,
                }
            );

            if (error) {
                alert(error.message);
                return;
            }

        }

        // CREATE ARTWORK
    
        else {

            const upload = await uploadArtworkImage(form.image);

            if (upload.error) {
                alert(upload.error.message);
                return;
            }

            const { error } = await createArtwork({
                title: form.title,
                category: form.category,
                price: form.price,
                description: form.description,
                featured: form.featured,
                image: upload.publicUrl,
            });

            if (error) {
                alert(error.message);
                return;
            }

        }

        await loadArtworks();

        setShowModal(false);
        setSelectedArtwork(null);

    } catch (err) {

        console.error(err);
        alert("Something went wrong.");

    }
}

    const columns = [
        {
            key: "image",
            label: "Image",
            width: "90px",
            render: (art) => (
                
                <img
                    src={art.image}
                    alt={art.title}
                    className="artwork-thumb"
                />
                ),
        },
        {
            key: "title",
            label: "Title",
        },
        {
            key: "category",
            label: "Category",
            width: "160px",
        },
        {
            key: "price",
            label: "Price",
            width: "120px",
        },
        {
            key: "featured",
            label: "Featured",
            render: (art) => (
                <span
                    className={`badge ${
                        art.featured
                            ? "bg-success"
                            : "bg-secondary"
                    }`}
                >
                    {art.featured ? "Featured" : "No"}
                </span>
            ),
        },
    ];

    if (loading) {
        return (
            <div className="text-center py-5">
                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">
                        Loading
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div>

           <PageHeader
                title="Artworks"
                subtitle="Manage all your artworks"
                buttonText="+ Add Artwork"
                onButtonClick={handleAddArtwork}
            />

            <ArtworkModal
                show={showModal}
                artwork={selectedArtwork}
                onClose={handleCloseModal}
                onSave={handleSaveArtwork}
            />

            <DataTable
                columns={columns}
                data={artworks}
                renderActions={(art) => (
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleEditArtwork(art) }
                        >
                            Edit
                        </button>

                        <button className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteArtwork(art)}
                        >
                            Delete
                        </button>
                    </div>
                )}
            />

        </div>
    );
}