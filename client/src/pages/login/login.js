import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { login } from "../../redux/current-user/current-user.actions";

import FormContainer from "../../components/form-container/form-container";

const Login = ({ currentUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const { userInfo, loading, error } = currentUser;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <h3>Sign in</h3>
            <Form onSubmit={handleFormSubmit} className="mb-3">
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Sign in
                </Button>
            </Form>

            <Row>
                <Col>
                    Do not have an account ?{" "}
                    <Link
                        to={
                            redirect
                                ? `/register?redirect=${redirect}`
                                : "/register"
                        }
                    >
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps)(Login);
