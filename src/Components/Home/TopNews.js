import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TopNews = () => {
    return (
        <div className="bg-dark p-3">
            <h2 className="text-white fw-bold fs-2">Top News</h2>
            <Container>
                <Row className="mb-3">
                    <Col xs="12" md="6" lg="4">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1628891890377-57dba2715caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="8">
                        <h3 className="text-white text-start">News One</h3>
                        <p className="text-white text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs="12" md="6" lg="4">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1628891890377-57dba2715caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="8">
                        <h3 className="text-white text-start">News Two</h3>
                        <p className="text-white text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs="12" md="6" lg="4">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1628891890377-57dba2715caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="8">
                        <h3 className="text-white text-start">News Three</h3>
                        <p className="text-white text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopNews;