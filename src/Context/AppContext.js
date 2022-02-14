import { createContext, useEffect, useState } from "react";
import { mockData } from "../api/data";
import { getProduct } from "../api/index";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const getAllProduct = () => {
    try {
      setProduct(mockData);
    } catch (e) {
      console.error("Error getting", e);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <AppContext.Provider value={{ product }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
