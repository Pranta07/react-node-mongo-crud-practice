import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        // console.log(data);
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Product added Successfully!");
                    e.target.reset();
                }
            });
    };
    return (
        <div>
            <h2 className="my-3">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Product Name"
                />
                <br />
                {errors.name && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                />
                <br />
                {errors.price && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    {...register("quantity", { required: true })}
                    placeholder="Quantity"
                />
                <br />
                {errors.quantity && (
                    <span className="text-danger">*This field is required</span>
                )}
                <br />

                <input
                    type="submit"
                    value="Add Product"
                    className="btn btn-info"
                />
            </form>
        </div>
    );
};

export default AddProduct;
