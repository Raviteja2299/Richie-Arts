import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            className="d-flex align-items-center justify-content-center bg-light"
            style={{ minHeight: "100vh" }}
        >
            <div className="text-center">
                <h1 className="display-1 fw-bold text-dark">404</h1>

                <h3 className="fw-semibold mt-3">
                    Oops! Page Not Found
                </h3>

                <p className="text-muted mt-3">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

            </div>
        </div>
    );
}

export default NotFound;