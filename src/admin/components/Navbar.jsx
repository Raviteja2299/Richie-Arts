import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../Services/authService"; 
import "../styles/admin.css";

export default function Navbar({ toggle }) {
    const navigate = useNavigate();

    async function handleLogout() {
        const { error } = await signOut();

        if (error) {
            console.error(error);
            alert("Failed to logout.");
            return;
        }

        navigate("/portal/login", { replace: true });
    }

    return (
        <header className="admin-navbar">
            <button
                className="btn btn-outline-dark d-lg-none"
                onClick={toggle}
            >
                <HiOutlineMenu size={22} />
            </button>

            <h5 className="m-0">
                Richie Arts Admin
            </h5>

            <button
                className="btn btn-danger"
                onClick={handleLogout}
            >
                Logout
            </button>
        </header>
    );
}