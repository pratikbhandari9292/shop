import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from "react-bootstrap";
import { useParams, useLocation, Link } from "react-router-dom";

import { addItem, removeItem } from "../../redux/cart/cart.actions";

import Alert from "../../components/alert/alert";

const Cart = ({ cart }) => {
    const { id: productID } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const { items } = cart;

    useEffect(() => {
        if (productID) {
            dispatch(addItem(productID, qty));
        }
    }, [productID]);

    const handleDeleteIconClick = () => {
        dispatch(removeItem(productID));
    };

    const renderCartItems = () => {
        return (
            <ListGroup>
                {items.map((item) => {
                    return (
                        <ListGroup.Item>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} fluid />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/products/${item.product}`}>
                                        {item.name}
                                    </Link>
                                </Col>
                                <Col md={2}>$ {item.price}</Col>
                                <Col md={3}>
                                    <Form.Control
                                        as="select"
                                        value={item.qty}
                                        onChange={(event) => {
                                            dispatch(
                                                addItem(
                                                    item.product,
                                                    Number(event.target.value)
                                                )
                                            );
                                        }}
                                    >
                                        {[
                                            ...Array(item.stock_count).keys(),
                                        ].map((ele) => {
                                            return (
                                                <option key={ele}>
                                                    {ele + 1}
                                                </option>
                                            );
                                        })}
                                    </Form.Control>
                                </Col>
                                <Col md={1}>
                                    <Button
                                        type="button"
                                        size="sm"
                                        onClick={handleDeleteIconClick}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        );
    };

    const getTotalPrice = () => {
        let totalPrice = 0;

        items.forEach((item) => {
            totalPrice += Number(item.price);
        });

        return totalPrice;
    };

    const getTotalQuantity = () => {
        let totalQuantity = 0;

        items.forEach((item) => {
            totalQuantity += Number(item.qty);
        });

        return totalQuantity;
    };

    const handleCheckoutClick = () => {};

    return (
        <Row className="mt-3">
            <Col md={8}>
                <h3 className = "mb-3">Your Shopping cart</h3>
                {items.length > 0 ? (
                    renderCartItems()
                ) : (
                    <Alert message="the cart is empty" />
                )}
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroup.Item>
                        <h4>Subtotal {getTotalQuantity()} items </h4>${" "}
                        {getTotalPrice()}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-grid">
                            <Button
                                type="button"
                                disabled={items.length === 0}
                                onClick={handleCheckoutClick}
                            >
                                Proceed to checkout
                            </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Cart);
