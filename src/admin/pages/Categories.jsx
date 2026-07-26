import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import CategoryModal from "../components/CategoryModal";

import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../../Services/categoryService";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const columns = [
        {
            key: "name",
            label: "Category",
        },
        {
            key: "description",
            label: "Description",
        },
    ];

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        setLoading(true);

        const { data, error } = await getAllCategories();

        if (error) {
            console.error(error);
        } else {
            setCategories(data);
        }

        setLoading(false);
    }

    function handleAddCategory() {
        setSelectedCategory(null);
        setShowModal(true);
    }

    function handleEditCategory(category) {
        setSelectedCategory(category);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
        setSelectedCategory(null);
    }

    async function handleSaveCategory(form) {
        try {
            if (selectedCategory) {
                const { error } = await updateCategory(
                    selectedCategory.id,
                    {
                        name: form.name,
                        description: form.description,
                    }
                );

                if (error) {
                    alert(error.message);
                    return;
                }
            } else {
                const { error } = await createCategory({
                    name: form.name,
                    description: form.description,
                });

                if (error) {
                    alert(error.message);
                    return;
                }
            }

            await loadCategories();
            handleCloseModal();
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    }

    async function handleDeleteCategory(category) {
        const confirmed = window.confirm(
            `Delete "${category.name}"?`
        );

        if (!confirmed) return;

        const { error } = await deleteCategory(category.id);

        if (error) {
            alert(error.message);
            return;
        }

        await loadCategories();
    }

    return (
        <>
            <PageHeader
                title="Categories"
                subtitle="Manage artwork categories"
                buttonText="+ Add Category"
                onButtonClick={handleAddCategory}
            />

            <DataTable
                columns={columns}
                data={categories}
                loading={loading}
                emptyMessage="No categories found."
                renderActions={(row) => (
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                                handleEditCategory(row)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                                handleDeleteCategory(row)
                            }
                        >
                            Delete
                        </button>
                    </div>
                )}
            />

            <CategoryModal
                show={showModal}
                category={selectedCategory}
                onClose={handleCloseModal}
                onSave={handleSaveCategory}
            />
        </>
    );
}