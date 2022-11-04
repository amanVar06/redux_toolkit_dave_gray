import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
        {/* this outlet represents all the children  */}
      </main>
    </>
  );
};

export default Layout;
