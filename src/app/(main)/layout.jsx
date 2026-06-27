import Navbar from "@/components/shared/Navbar";

const MainLayoutPage = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
};

export default MainLayoutPage;
