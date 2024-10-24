import AllProducts from "./conponents/AllProducts/AllProducts";
import CartContainer from "./conponents/CartContainer/CartContainer";
import Navbar from "./conponents/Header/Navbar";

const App = () => {



  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-around">
        <AllProducts></AllProducts>
        <CartContainer></CartContainer>
      </div>
    </div>
  );
};

export default App;