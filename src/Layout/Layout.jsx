import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Layout = () => {
  return (
    <div className=" container mx-auto my-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
