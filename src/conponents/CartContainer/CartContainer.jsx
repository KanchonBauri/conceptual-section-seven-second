import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({ handleIsActiveState, isActive }) => {
    // console.log(handleIsActiveState)
    return (
        <div>
            <h3 className="text-4xl font-bold ">Cart Container</h3>
            <div className="flex justify-around">
                <div onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn bg-blue-600" : "btn"}`}>CART</div>
                <div onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? "btn" : "btn bg-blue-600"}`} >ABOUT</div>
            </div>
            {isActive.cart ? <Cart></Cart> : <About></About>}
            { }

        </div>
    );
};

export default CartContainer;