import Header from "./Header";
import { Outlet } from "react-router";
import ProductComponent from "../pages/Product";
import HomeComponent from "../pages/Home";
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      
    </>
  );
};

export default MainLayout;
