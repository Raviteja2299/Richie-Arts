import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "./Pages/Home";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Artworks from "./admin/pages/Artworks";
import Categories from "./admin/pages/Categories";
import Orders from "./admin/pages/Orders";
import Settings from "./admin/pages/Settings";
import Messages from "./admin/pages/Messages";

import AdminLayout from "./admin/layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/portal/login" element={<Login />} />

                <Route
                    path="/portal"
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
                    <Route path="messages" element={<Messages />} />
                    
                </Route>
                <Route path="/admin/*" element={<Navigate to="/" replace />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;