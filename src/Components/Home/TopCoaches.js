import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TopCoaches = () => {
    return (
        <div>
            <h2 className="fw-bold fs-2">Top Coaches</h2>
            <Container>
                <Row>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxmb290YmFsbCUyMGNvYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Coach One</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1606470542032-a9caa0be6e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBjb2FjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Coach Two</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <div style={{height: '350px'}}>
                            <img src="https://images.unsplash.com/photo-1631490238088-9e9dd50041a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGwlMjBjb2FjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Coach Three</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopCoaches;