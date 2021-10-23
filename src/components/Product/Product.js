import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
    const { name, price, quantity } = product;
    return (
        <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Price: {price}</ListGroup.Item>
                    <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default Product;
