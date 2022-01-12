import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>404 Error! The page is not found.</h2>
            <p>
                <Link to="/home">Go to Home</Link>
            </p>
        </div>
    )
}

export default NotFound;