import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";

function MainLayout() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
