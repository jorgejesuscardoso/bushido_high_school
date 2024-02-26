import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { NavFloat } from "../NavBar/NavFloat";

export const LayOut = () => {
  return (
    <div>
      <Outlet />
      <NavBar />
      <NavFloat />
      <Footer />
    </div>
  );
}