import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Register = () => {
    return (
        <div>
            <Header/>
            <br/> <br/>
            <h2>Please Register</h2>
            <Container>
                <Form>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control type="email" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <br/>
                    <span>Already have an account? <Link to="/login">Please login.</Link>.</span>
                    <br/> <br/>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;