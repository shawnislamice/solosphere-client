import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-[100vh-306px]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      <Toaster></Toaster>
      </div>

    );
};

export default MainLayout;