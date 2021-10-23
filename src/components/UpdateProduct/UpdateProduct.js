import React from "react";
import { useParams } from "react-router";

const UpdateProduct = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Update Product id: {id}</h1>
        </div>
    );
};

export default UpdateProduct;
