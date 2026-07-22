
import "../styles/admin.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ show, onClose }) {
    return (
        <aside className={`sidebar ${show ? "show" : ""}`}>

            <div className="sidebar-header">
                Richie Arts
            </div>

            <NavLink to="/admin/dashboard" onClick={onClose}>
                Dashboard
            </NavLink>

            <NavLink to="/admin/artworks" onClick={onClose}>
                Artworks
            </NavLink>

            <NavLink to="/admin/categories" onClick={onClose}>
                Categories
            </NavLink>

            <NavLink to="/admin/orders" onClick={onClose}>
                Orders
            </NavLink>

            <NavLink to="/admin/settings" onClick={onClose}>
                Settings
            </NavLink>

        </aside>
    );
}