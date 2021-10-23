import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product, handleDelete }) => {
    const { _id, name, price, quantity } = product;

    return (
        <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Price: {price}</ListGroup.Item>
                    <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            onClick={() => handleDelete(_id)}
                            variant="danger"
                            className="mx-1"
                        >
                            Delete
                        </Button>
                        <Link to={`/update/product/${_id}`}>
                            <Button variant="info" className="mx-1">
                                Update
                            </Button>
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default Product;
