import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FloatingContact from "../Components/FloatingContact/FloatingContact";

export default function PublicLayout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <FloatingContact />

            <Footer />
        </>
    );
}