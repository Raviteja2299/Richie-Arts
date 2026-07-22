import { signIn } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
    e.preventDefault();

    const { data, error } = await signIn(email, password);

    if (error) {
        alert(error.message);
        return;
    }

    navigate("/admin/dashboard");
}

    return (

        <div className="container py-5">

            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="btn btn-dark">

                    Login

                </button>

            </form>

        </div>

    );

}