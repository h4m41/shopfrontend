import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import ProductList from "./pages/ProductList";
import SingleProductPage from "./pages/SingleProductPage";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="text-trueGray-700">
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </div>
  );
}

export default App;
