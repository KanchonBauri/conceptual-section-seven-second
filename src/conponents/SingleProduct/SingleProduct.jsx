
const SingleProduct = ({ product }) => {
    // console.log(product)
    const {name, image_avator, description, price, category, isFeature} = product;
    return (
        <div>
            {/* <h3>Single Product</h3> */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_avator} alt="Shoes" className="rounded-xl w-full " />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>{isFeature? "Feature category" : "not category"}</p>
                    <p></p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;