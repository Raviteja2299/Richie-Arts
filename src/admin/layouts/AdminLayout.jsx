import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/admin.css";

export default function AdminLayout() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar(prev => !prev);
    const closeSidebar = () => setShowSidebar(false);

    return (
        <div className="admin-layout">

            <Sidebar
                show={showSidebar}
                onClose={closeSidebar}
            />

            {/* Mobile overlay */}
            {showSidebar && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                />
            )}

            <div className="main-content">

                <Navbar toggle={toggleSidebar} />

                <div className="page-content">
                    <Outlet />
                </div>

            </div>

        </div>
    );
}