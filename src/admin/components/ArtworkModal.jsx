import { useState } from "react";

export default function ArtworkModal({
    show,
    onClose,
    onSave
}) {

    const [form, setForm] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
        featured: false,
        image: null
    });

    if (!show) return null;

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    return (
        <div className="modal-backdrop-custom">

            <div className="artwork-modal">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h3>Add Artwork</h3>

                    <button
                        className="btn-close"
                        onClick={onClose}
                    />

                </div>

                <input
                    type="file"
                    className="form-control mb-3"
                />

                <input
                    className="form-control mb-3"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Category"
                    name="category"
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Price"
                    name="price"
                    type="number"
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    rows={4}
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                />

                <div className="form-check mb-4">

                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="featured"
                        onChange={handleChange}
                    />

                    <label className="form-check-label">
                        Featured
                    </label>

                </div>

                <div className="text-end">

                    <button
                        className="btn btn-secondary me-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => onSave(form)}
                    >
                        Save Artwork
                    </button>

                </div>

            </div>

        </div>
    );
}