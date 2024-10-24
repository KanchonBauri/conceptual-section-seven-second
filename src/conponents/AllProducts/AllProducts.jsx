/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({ handleSelectedProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => { setProducts(data.products) })

    })

    return (
        <div>
            <h3 className="text-4xl font-bold ">All Products</h3>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    products.map(product =>
                        <SingleProduct
                            key={product.id}
                            product={product}
                            handleSelectedProduct={handleSelectedProduct}
                        ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;