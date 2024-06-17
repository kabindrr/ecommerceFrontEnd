import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

const App = () => {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />

        {/* private routes */}

        <Route path="admin/new" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
