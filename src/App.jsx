import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Artworks from "./admin/pages/Artworks";
import Categories from "./admin/pages/Categories";
import Orders from "./admin/pages/Orders";
import Settings from "./admin/pages/Settings";

import AdminLayout from "./admin/layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/admin/login" element={<Login />} />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="artworks" element={<Artworks />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;