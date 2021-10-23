import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1 className="my-3">All Products</h1>
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {products.map((prod) => (
                        <Product key={prod._id} product={prod}></Product>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
