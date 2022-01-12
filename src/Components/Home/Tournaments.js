import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Tournaments = () => {
    return (
        <div>
            <h2 className="fw-bold fs-2">Tournaments</h2>
            <Container>
                <Row>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Dream League</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1602472097151-72eeec7a3185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Dream Champion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Club Cup</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <div style={{height: '150px'}}>
                            <img src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-100 h-100"/>
                        </div>
                        <h3>Winter Cup</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis quaerat temporibus necessitatibus assumenda. Fugiat.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tournaments;