import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";

import { getProducts } from "../../redux/products/products.actions";

import Product from "../../components/product/product";
import Spinner from "../../components/spinner/spinner";
import Alert from "../../components/alert/alert";

const HomePage = ({ products }) => {
    const dispatch = useDispatch();
    const { products: productsList, loading, error } = products;

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div className="mt-3">
            <h3>Our latest products</h3>

            {loading && <Spinner />}

            {error ? (
                <Alert message={error} />
            ) : (
                <Row>
                    {productsList.map((product) => {
                        return (
                            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                                <Product {...product} />
                            </Col>
                        );
                    })}
                </Row>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(HomePage);
