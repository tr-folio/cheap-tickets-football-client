import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TopPlayers = () => {
    return (
        <div>
            <h2 className="fw-bold fs-2">TopPlayers</h2>
            <Container>
                <Row>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1613228206022-8a2c9aba0607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAxfHxmb290YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Player One</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1597630907602-356d09900200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk4fHxmb290YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Player Two</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1613228087716-8b8985f0de9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxmb290YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Player Three</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopPlayers;