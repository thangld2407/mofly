import { Routes, Route } from "react-router-dom";
import ProductComponent from "./components/pages/Product";
import MainLayout from "./components/layout";
import CartProduct from "./components/pages/Cart";
import ListProduct from "./components/pagesOfRedux/ListProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="/products" element={<ProductComponent />} />
          <Route path="/cart" elment={<CartProduct />} /> */}
          {/* <Route path="/products" elment={<ListProduct />} /> */}
        </Route>
      </Routes>
      <ListProduct />
    </div>
  );
}

export default App;
