import { useState } from "react";
import AllProducts from "./conponents/AllProducts/AllProducts";
import CartContainer from "./conponents/CartContainer/CartContainer";
import Navbar from "./conponents/Header/Navbar";

const App = () => {
  // button section start..........................
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
  // console.log(isActive)
  // button section End..........................

  // Add cart button section start..........................
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleSelectedProduct = (product) => {
    // console.log(product);

    const isexist = selectedProducts.find((p) => p.id == product.id);
    // console.log(isexist);
    // if(isexist){
    //   console.log("ache")
    // }else{
    //   console.log("nai")
    // }
    if (isexist) {
      alert("r add kora jabe na")
    } else {
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
      // console.log(selectedProducts)

    }


  }

  // console.log(selectedProducts)






  return (
    <div>
      <Navbar selectedProducts={selectedProducts} ></Navbar>
      <div className="flex justify-around  ">
        <AllProducts handleSelectedProduct={handleSelectedProduct} ></AllProducts>
        <CartContainer selectedProducts={selectedProducts} isActive={isActive}   handleIsActiveState={handleIsActiveState} ></CartContainer>
      </div>
    </div>
  );
};

export default App;