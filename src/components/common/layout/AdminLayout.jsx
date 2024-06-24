import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";

export const AdminLayout = () => {
  return (
    <div className="d-flex vh-100">
      <div className="left bg-dark text-light" style={{ width: "200px" }}>
        <div className="py-3">Admin CMS</div>
        <hr />

        <SideBar />
      </div>
      <div className="right flex-grow-1">
        <Header />

        <main className="main" style={{ minHeight: "80vh" }}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
