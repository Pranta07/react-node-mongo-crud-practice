import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/addproduct">Add Product</Link>
        </nav>
    );
};

export default Header;
