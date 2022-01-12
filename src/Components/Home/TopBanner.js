import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeStyles/TopBanner.css";

const TopBanner = () => {
    return (
        <div>
            <div className="top-banner-container">
                <div className="d-flex justify-content-center align-items-center flex-column" style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
                    <h1 className="text-white fw-light fs-1">Enjoy Favourite Matches</h1>
                    <p style={{maxWidth: '500px', padding: '20px', color: 'rgb(150, 150, 150)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    <br/>
                    <p>
                        <button className="btn btn-primary">Buy Ticket Now</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;