import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";
import { AdminLayout } from "./components/common/layout/AdminLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Admins } from "./pages/user/Admins";
import { Categories } from "./pages/category/Categories";
import { Products } from "./pages/products/Products";
import { Reviews } from "./pages/review/Reviews";
import { User } from "./pages/user/User";
import { Order } from "./pages/order/Order";
import { Profile } from "./pages/user/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<UserVerification />} />

        {/* private routes */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="/admin/orders" element={<Order />} />
          <Route path="/admin/reviews" element={<Reviews />} />

          <Route path="/admin/admins" element={<Admins />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/new" element={<Register />} />
        </Route>

        <Route path="*" element={<h1>404 Page not Found!</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
