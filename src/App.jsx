import "./App.css";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Login from "./user/Login";

const App = () => {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />

        {/* private routes */}
      </Routes>
      <ToastContainer />
      <Button>Submit</Button>
    </div>
  );
};

export default App;
