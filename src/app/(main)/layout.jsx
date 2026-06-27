import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MainLayoutPage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayoutPage;
