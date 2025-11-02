import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notfound-page">
            <div className="notfound-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link to="/" className="home-btn">
                    ⬅ Back to Menu
                </Link>
            </div>
        </div>
    );
}
