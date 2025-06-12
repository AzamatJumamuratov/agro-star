import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
