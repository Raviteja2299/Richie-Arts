import { useState, useEffect } from "react";

import { getAllCategories } from "../../Services/categoryService";

const initialForm = {
    title: "",
    category: "",
    price: "",
    description: "",
    featured: false,
    image: null,
};

export default function ArtworkModal({
    show,
    onClose,
    onSave,
    artwork = null,
}) {
    const [form, setForm] = useState(initialForm);
    const [saving, setSaving] = useState(false);
    const [categories, setCategories] = useState([]);


        async function loadCategories() {

            const { data, error } = await getAllCategories();

            if (error) {
                console.error(error);
                return;
            }

            setCategories(data);
        }


    useEffect(() => {
        if (!show) return;

        loadCategories();

        if (artwork) {
            setForm({
                title: artwork.title || "",
                category: artwork.category || "",
                price: artwork.price || "",
                description: artwork.description || "",
                featured: artwork.featured || false,
                image: null,
            });
        } else {
            setForm(initialForm);
        }
    }, [artwork, show]);



    if (!show) return null;

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) return;

        setForm((prev) => ({
            ...prev,
            image: file,
        }));
    }

    async function handleSubmit() {
        if (!form.title.trim()) {
            alert("Title is required.");
            return;
        }

        if (!artwork && !form.image) {
            alert("Please select an image.");
            return;
        }

        if (
            form.category === "Other" &&
            !form.customCategory.trim()
        ) {
            alert("Please enter a category.");
            return;
        }





    const artworkData = {
        ...form
        
    };

    try {
        setSaving(true);

        await onSave(artworkData);

        setForm(initialForm);
        onClose();
    } finally {
        setSaving(false);
    }
}

    function handleClose() {
        setForm(initialForm);
        onClose();
    }

    return (
        <div className="modal-backdrop-custom">

            <div className="artwork-modal">

                {/* Header */}

                <div className="modal-header-custom">

                    <h3 className="mb-0">
                        {artwork ? "Edit Artwork" : "Add Artwork"}
                    </h3>

                    <button
                        className="btn-close"
                        onClick={handleClose}
                    />

                </div>

                {/* Scrollable Body */}

                <div className="modal-content-custom">

                    <label className="form-label">
                        Artwork Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        className="form-control mb-3"
                        onChange={handleImageChange}
                    />

                    {form.image && (

                        <div className="mb-4">

                            <img
                                src={URL.createObjectURL(form.image)}
                                alt="Preview"
                                className="img-fluid rounded border"
                                style={{
                                    maxHeight: 220,
                                    objectFit: "cover",
                                }}
                            />

                            <small className="text-muted d-block mt-2">
                                {form.image.name}
                            </small>

                        </div>

                    )}

                    <label className="form-label">
                        Title
                    </label>

                    <input
                        className="form-control mb-3"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    <label className="form-label">
                        Category
                    </label>

                    <select
                        className="form-select mb-3"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.name}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>


                    <label className="form-label">
                        Price
                    </label>

                    <input
                        type="number"
                        className="form-control mb-3"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <label className="form-label">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        className="form-control mb-3"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <div className="form-check">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="featured"
                            checked={form.featured}
                            onChange={handleChange}
                        />

                        <label className="form-check-label">
                            Featured Artwork
                        </label>

                    </div>

                </div>

                {/* Footer */}

                <div className="modal-footer-custom">

                    <button
                        className="btn btn-outline-secondary me-2"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary"
                        disabled={saving}
                        onClick={handleSubmit}
                    >
                        {saving
                            ? "Saving..."
                            : artwork
                                ? "Update Artwork"
                                : "Save Artwork"}
                    </button>

                </div>

            </div>

        </div>
    );
}