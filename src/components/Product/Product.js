import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, price, quantity } = product;

    const handleDelete = () => {
        const proceed = window.confirm("Are you sure? You want to delete?");

        if (proceed) {
            const url = `http://localhost:5000/product/${_id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Product deleted successfully!");
                    }
                });
        }
    };
    return (
        <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Price: {price}</ListGroup.Item>
                    <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            onClick={handleDelete}
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
