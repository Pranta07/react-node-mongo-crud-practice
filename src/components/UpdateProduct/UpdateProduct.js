import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: "",
    });
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const onSubmit = (data, e) => {
        // console.log(data);
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    alert("Product Information Updated Successfully!");
                    e.target.reset();
                }
            });
    };
    return (
        <div>
            <h1 className="my-3">Update Product id: {id}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: true,
                        onChange: (e) => {
                            const updatedName = e.target.value;
                            const updatedProduct = { ...product };
                            updatedProduct.name = updatedName;
                            setProduct(updatedProduct);
                        },
                    })}
                    placeholder="Product Name"
                    value={product.name}
                />
                <br />
                {errors.name && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    {...register("price", {
                        required: true,
                        onChange: (e) => {
                            const updatedPrice = e.target.value;
                            const updatedProduct = { ...product };
                            updatedProduct.price = updatedPrice;
                            setProduct(updatedProduct);
                        },
                    })}
                    placeholder="Price"
                    value={product.price}
                />
                <br />
                {errors.price && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    {...register("quantity", {
                        required: true,
                        onChange: (e) => {
                            const updatedQuantity = e.target.value;
                            const updatedProduct = { ...product };
                            updatedProduct.quantity = updatedQuantity;
                            setProduct(updatedProduct);
                        },
                    })}
                    placeholder="Quantity"
                    value={product.quantity}
                />
                <br />
                {errors.quantity && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    type="submit"
                    value="Update Info"
                    className="btn btn-info"
                />
            </form>
        </div>
    );
};

export default UpdateProduct;
