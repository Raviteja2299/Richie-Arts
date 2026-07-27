
import "../styles/admin.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ show, onClose }) {
    return (
        <aside className={`sidebar ${show ? "show" : ""}`}>

            <div className="sidebar-header">
                Richie Arts
            </div>

            <NavLink to="/portal/dashboard" onClick={onClose}>
                Dashboard
            </NavLink>

            <NavLink to="/portal/artworks" onClick={onClose}>
                Artworks
            </NavLink>

            <NavLink to="/portal/messages" onClick={onClose}>
                Messages
            </NavLink>

            <NavLink to="/portal/categories" onClick={onClose}>
                Categories
            </NavLink>

            <NavLink to="/portal/orders" onClick={onClose}>
                Orders
            </NavLink>

            <NavLink to="/portal/settings" onClick={onClose}>
                Settings
            </NavLink>

        </aside>
    );
}