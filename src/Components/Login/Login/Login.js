import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Login = () => {
    return (
        <div>
            <Header/>
            <br/> <br/>
            <h2>Please Login</h2>
            <Container>
                <Form>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br/>
                    <span>Do not have an account? <Link to="/register">Please register</Link>.</span>
                    <br/> <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;