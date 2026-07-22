import { useEffect, useState } from "react";
import { getAllArtworks } from "../../services/artworkService";

import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

import "../styles/admin.css";


import ArtworkModal from "../components/ArtworkModal";



export default function Artworks() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

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
                        Loading...
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
                onButtonClick={() => setShowModal(true)}
            />

            <ArtworkModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={(form) => {
                    console.log(form);
                    setShowModal(false);
                }}
            />

            <DataTable
                columns={columns}
                data={artworks}
                renderActions={(art) => (
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Edit
                        </button>

                        <button className="btn btn-outline-danger btn-sm">
                            Delete
                        </button>
                    </div>
                )}
            />

        </div>
    );
}