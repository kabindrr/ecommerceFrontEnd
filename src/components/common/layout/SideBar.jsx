import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Catogeries
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Products
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Products
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/admin/dashboard">
          Reviews
        </Link>
      </div>

      <hr />
      <div className="p-2">Admins</div>
    </Stack>
  );
};
