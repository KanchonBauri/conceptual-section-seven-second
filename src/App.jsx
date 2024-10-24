import { useState } from "react";
import AllProducts from "./conponents/AllProducts/AllProducts";
import CartContainer from "./conponents/CartContainer/CartContainer";
import Navbar from "./conponents/Header/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })
  // console.log(isActive)

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart" 
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }
  console.log(isActive)


  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-around">
        <AllProducts></AllProducts>
        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState} ></CartContainer>
      </div>
    </div>
  );
};

export default App;