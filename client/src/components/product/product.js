import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ name, _id, image, rating, reviews_count, price }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/products/${_id}`}>
                <Card.Img src={image} />
            </Link>

            <Card.Body>
                <Card.Title>
                    <strong>{name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    <div className="my-3">
                        {rating} from {reviews_count} users
                    </div>
                </Card.Text>
                <Card.Text as="h3">${price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
