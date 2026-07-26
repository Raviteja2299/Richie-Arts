import { useEffect, useState } from "react";

const initialForm = {
    name: "",
    description: "",
};

export default function CategoryModal({
    show,
    onClose,
    onSave,
    category = null,
}) {
    const [form, setForm] = useState(initialForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!show) return;

        if (category) {
            setForm({
                name: category.name || "",
                description: category.description || "",
            });
        } else {
            setForm(initialForm);
        }
    }, [category, show]);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit() {
        if (!form.name.trim()) {
            alert("Category name is required.");
            return;
        }

        try {
            setSaving(true);

            await onSave(form);

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

    if (!show) return null;

    return (
        <div className="modal-backdrop-custom">
            <div className="artwork-modal">

                {/* Header */}

                <div className="modal-header-custom">
                    <h4>
                        {category ? "Edit Category" : "Add Category"}
                    </h4>

                    <button
                        className="btn-close"
                        onClick={handleClose}
                    ></button>
                </div>

                {/* Body */}

                <div className="modal-content-custom">

                    <div className="mb-3">
                        <label className="form-label">
                            Category Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter category name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Description
                        </label>

                        <textarea
                            className="form-control"
                            rows="4"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Enter description (optional)"
                        />
                    </div>

                </div>

                {/* Footer */}

                <div className="modal-footer-custom">

                    <button
                        className="btn btn-secondary"
                        onClick={handleClose}
                        disabled={saving}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        disabled={saving}
                    >
                        {saving
                            ? "Saving..."
                            : category
                            ? "Update Category"
                            : "Save Category"}
                    </button>

                </div>

            </div>
        </div>
    );
}