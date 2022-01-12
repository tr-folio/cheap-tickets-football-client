import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMatch from "./SingleMatch";

const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('https://secret-beach-25403.herokuapp.com/get_matches')
        .then(res => res.json())
        .then((data) => {
            setMatches(data)
        })
    }, [])
    return (
        <div>
            <h2 className="fw-bold fs-2">Matches</h2>
            <Container>
                <Row>
                    {matches.map(match => <SingleMatch key={match._id} match={match}></SingleMatch>)}
                </Row>
            </Container>
        </div>
    )
}

export default Matches;