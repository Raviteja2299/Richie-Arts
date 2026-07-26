import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { getAllArtworks } from "../../Services/artworkService";

export default function Dashboard() {

    const [stats, setStats] = useState({
        total: 0,
        categories: 0,
        featured: 0,
    });

    async function loadDashboard() {
        const { data, error } = await getAllArtworks();

        if (error) {
            console.error(error);
            return;
        }

        const uniqueCategories = [
            ...new Set(data.map(item => item.category))
        ];

        setStats({
            total: data.length,
            categories: uniqueCategories.length,
            featured: data.filter(item => item.featured).length,
        });
    }

    useEffect(() => {
        loadDashboard();
    }, []);

    return (
        <>
            <PageHeader
                title="Dashboard"
                subtitle="Welcome back!"
            />

            <div className="row g-4">

                <div className="col-lg-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Total Artworks</h5>
                            <h2>{stats.total}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Categories</h5>
                            <h2>{stats.categories}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Featured</h5>
                            <h2>{stats.featured}</h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}