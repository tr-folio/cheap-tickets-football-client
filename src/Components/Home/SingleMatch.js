import React from "react";
import { Col } from "react-bootstrap";

const SingleMatch = (props) => {
    const { match } = props;
    return (
        <Col xs="12" sm="6" md="4" className="mb-3 text-white">
            <div style={{width: '90%', margin: '0 auto'}} className="bg-primary py-3">
                <h6>{match.t1} vs {match.t2}</h6>
                <h6>Venue: {match.venue}</h6>
                <h6>Time: {match.time}</h6>
                <button className="btn btn-light">Buy Ticket</button>
            </div>
        </Col>
    )
}

export default SingleMatch;