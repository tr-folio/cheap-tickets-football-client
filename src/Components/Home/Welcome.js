import React from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <Container>
                <h2 className="fw-bold fs-2">Welcome</h2>
                <p className="fs-5">
                    Welcome to our site. Visit us and buy ticket from us. Watch the matches of your favourtie teams and buy your ticket at the best price. Do you want your favourite player's jersey? <a href="">Visit Our Shop Now</a>
                </p>
            </Container>
        </div>
    )
}

export default Welcome;