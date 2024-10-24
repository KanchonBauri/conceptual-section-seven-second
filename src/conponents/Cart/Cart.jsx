/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Cart = ({ selectedProducts }) => {
    console.log(selectedProducts)
    return (
        <div>
            <h1>Cart:</h1>
            <div >
                {
                    selectedProducts.map((product) => (
                        <div className="my-4" >
                            {/* <div className="border-2  mb-4 p-5 rounded-xl border-stone-800 "> */}
                            <div className="flex gap-2">
                                <img className="w-14" src={product.image_avator} alt="" />
                                <div>
                                    <p>Name: <span className="font-bold" >{product.name}</span> </p>
                                    <p>Price: {product.price} </p>
                                    <button className="btn btn-primary" >Delete</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Cart;