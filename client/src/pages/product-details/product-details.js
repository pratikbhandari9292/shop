import React, { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { getProductDetails } from "../../redux/product-details/product-details.actions";

import Spinner from "../../components/spinner/spinner";
import Alert from "../../components/alert/alert";

const ProductDetails = ({ productDetails }) => {
    const [qty, setQty] = useState(1);

    const { productID } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { details, loading, error } = productDetails;

    useEffect(() => {
        dispatch(getProductDetails(productID));
    }, []);

    const handleAddToCartClick = () => {
        navigate(`/cart/${productID}?qty=${qty}`);
    };

    return (
        <div className="mt-3">
            {loading ? (
                <Spinner />
            ) : error ? (
                <Alert message={error} />
            ) : (
                <Row>
                    <Col md={5}>
                        <Image src={details.image} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>{details.name}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {details.rating} from {details.reviews_count}{" "}
                                users
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${details.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {details.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>
                                        <strong>${details.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status </Col>
                                    <Col>
                                        {" "}
                                        {details.stock_count > 0
                                            ? "In stock"
                                            : "Out of stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {details.stock_count > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantity:</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(event) => {
                                                    setQty(event.target.value);
                                                }}
                                            >
                                                {[
                                                    ...Array(
                                                        details.stock_count
                                                    ).keys(),
                                                ].map((ele) => {
                                                    return (
                                                        <option key={ele}>
                                                            {ele + 1}
                                                        </option>
                                                    );
                                                })}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <div className="d-grid">
                                    <Button
                                        className="btn-block"
                                        disabled={details.stock_count === 0}
                                        onClick={handleAddToCartClick}
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productDetails: state.productDetails,
    };
};

export default connect(mapStateToProps)(ProductDetails);
