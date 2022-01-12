import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TrainingGround = () => {
    return (
        <div>
            <h2>Training Ground</h2>
            <Container>
                <Row className="mb-3">
                    <Col xs="12" md="6" lg="4">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1516676324900-a8c0c01caa33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb3RiYWxsJTIwY29hY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="8">
                        <h3 className="text-start">Warm Match</h3>
                        <p className="text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrainingGround;